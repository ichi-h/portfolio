module WorksServer.UseCases.Works.Redeploy.Interactor

open System
open FsToolkit.ErrorHandling
open WorksServer.Entities.Work
open WorksServer.UseCases.Works.Redeploy.Input
open WorksServer.UseCases.Works.Redeploy.Output
open WorksServer.Values.Category

type RedeployWorksUseCase = RedeployWorksInput -> RedeployWorksOutput

let interactor (input: RedeployWorksInput) : RedeployWorksOutput =
    asyncResult {
        let! pages = input.fetchAllPageFromCMS

        let results =
            pages
            |> List.map (fun page ->
                let body =
                    input.fetchPageBodyFromCMS page.id
                    |> Async.RunSynchronously

                let work: Work =
                    { slug = page.slug
                      category =
                        createCategory page.category
                        |> Result.defaultValue Category.Unknown
                      title = page.title
                      description = page.description
                      body = body
                      thumbnailUrl = page.thumbnailUrl
                      languages = page.languages |> List.map (fun l -> { name = l })
                      createdAt = DateTime.Parse page.createdAt
                      updatedAt = DateTime.Parse page.updatedAt
                      publishedAt = page.publishedAt |> Option.map DateTime.Parse
                      unpublishedAt = page.unpublishedAt |> Option.map DateTime.Parse }

                input.updateOrCreateWork work
                |> Async.RunSynchronously)

        let errorResults =
            results
            |> List.map (fun r ->
                match r with
                | Ok _ -> ""
                | Error e -> "- " + e)
            |> List.filter (fun e -> e <> "")

        if errorResults |> List.length > 0 then
            return!
                errorResults
                |> String.concat "\n"
                |> InfrastructureError
                |> Error
        else
            return! Ok { message = "ok" }

    }
