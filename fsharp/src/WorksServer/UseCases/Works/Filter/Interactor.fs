module WorksServer.UseCases.Works.Filter.Interactor

open FsToolkit.ErrorHandling
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Output
open WorksServer.Values.Category

type FilterWorksUseCase = FilterInput -> FilterWorksOutput

let interactor (input: FilterInput) : FilterWorksOutput =
    result {
        let! works =
            input.filterWorks input.search input.category input.offset input.limit
            |> Result.mapError InfrastructureError

        let summarizedWorks =
            works
            |> Seq.map (fun work ->
                { slug = work.slug
                  category = categoryToString work.category
                  title = work.title
                  description = work.description
                  thumbnailUrl = work.description
                  publishedAt = work.publishedAt.ToString "yyyy-mm-dd hh:mm:ss"
                  updatedAt = work.updatedAt.ToString "yyyy-mm-dd hh:mm:ss" })

        return!
            Ok
                { total = Seq.length works
                  works = summarizedWorks }
    }
