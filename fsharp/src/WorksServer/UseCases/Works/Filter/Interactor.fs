module WorksServer.UseCases.Works.Filter.Interactor

open FsToolkit.ErrorHandling
open WorksServer.UseCases.Base
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Output
open WorksServer.Values.Category

let filterWorksInteractor (input: FilterInput) : FilterWorksOutput =
    asyncResult {
        let! works =
            input.filterWorks input.search input.category input.offset input.limit
            |> AsyncResult.requireSome
                { status = ErrorStatus.InternalServerError
                  message = "Failed" }

        let summarizedWorks =
            works
            |> List.map (fun work ->
                { slug = work.slug
                  category = categoryToString work.category
                  title = work.title
                  description = work.description
                  thumbnailUrl = work.description
                  publishedAt = work.publishedAt.ToString "YYYY-MM-DD HH:MM:SS"
                  updatedAt = work.updatedAt.ToString "YYYY-MM-DD HH:MM:SS" })

        return!
            Ok
                { total = List.length works
                  works = summarizedWorks }
    }
