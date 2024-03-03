module WorksServer.UseCases.Works.Show.Interactor

open FsToolkit.ErrorHandling
open WorksServer.UseCases.Works.Show.Input
open WorksServer.UseCases.Works.Show.Output
open WorksServer.Values.Category

type ShowWorkUseCase = ShowWorkInput -> ShowWorkOutput

let interactor (input: ShowWorkInput) : ShowWorkOutput =
    result {
        let! work =
            input.showWork input.slug
            |> Result.mapError InfrastructureError

        match work with
        | Some w ->
            return!
                Ok
                    { slug = w.slug
                      category = categoryToString w.category
                      title = w.title
                      description = w.description
                      body = w.body
                      thumbnailUrl = w.description
                      languages = w.languages |> List.map (fun l -> l.name)
                      publishedAt =
                        w.publishedAt
                        |> Option.map (fun dt -> dt.ToString "yyyy-MM-dd")
                        |> Option.defaultValue ""
                      updatedAt = w.updatedAt.ToString "yyyy-MM-dd" }
        | None -> return! Error NotFoundError
    }
