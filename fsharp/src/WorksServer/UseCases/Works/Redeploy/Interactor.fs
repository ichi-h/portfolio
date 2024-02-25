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

        pages
        |> List.forall (fun page ->
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
                  createdAt = DateTime.Parse page.createdAt
                  updatedAt = DateTime.Parse page.updatedAt
                  publishedAt = page.publishedAt |> Option.map DateTime.Parse
                  unpublishedAt = page.unpublishedAt |> Option.map DateTime.Parse }

            input.updateOrCreateWork work
            |> Async.RunSynchronously = Ok 1)
        |> ignore

        return! Ok { message = "ok" }
    }
