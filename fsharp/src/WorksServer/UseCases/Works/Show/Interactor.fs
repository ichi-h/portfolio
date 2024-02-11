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
                      publishedAt = w.publishedAt.ToString "yyyy-MM-dd"
                      updatedAt = w.updatedAt.ToString "yyyy-MM-dd" }
        | None -> return! Error NotFoundError
    }
