module WorksServer.UseCases.Works.Filter.Interactor

open FsToolkit.ErrorHandling
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Output
open WorksServer.Values.Category

type FilterWorksUseCase = FilterWorksInput -> FilterWorksOutput

let interactor (input: FilterWorksInput) : FilterWorksOutput =
    result {
        let! works =
            input.filterWorks input.search input.category input.offset input.limit
            |> Result.mapError InfrastructureError

        let summarizedWorks =
            works
            |> Seq.filter (fun work -> work.slug <> "/me")
            |> Seq.map (fun work ->
                { slug = work.slug
                  category = categoryToString work.category
                  title = work.title
                  description = work.description
                  thumbnailUrl = work.thumbnailUrl
                  publishedAt =
                    work.publishedAt
                    |> Option.map (fun dt -> dt.ToString "yyyy-MM-dd")
                    |> Option.defaultValue ""
                  updatedAt = work.updatedAt.ToString "yyyy-MM-dd" })

        return!
            Ok
                { total = Seq.length works
                  works = summarizedWorks }
    }
