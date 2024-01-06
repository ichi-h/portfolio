module WorksServer.UseCases.Works.Filter.Interactor

open FsToolkit.ErrorHandling
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Output
open WorksServer.Values.Category
open WorksServer.Values.LimitNumber
open WorksServer.Values.Offset

let filterWorksInteractor (input: FilterInput) : FilterWorksOutput =
    result {
        let category = input.category |> Option.map createCategory

        let! offset =
            input.offset
            |> createOffset
            |> Result.mapError ValidationError

        let! limit =
            input.offset
            |> createLimitNumber (Some 1) (Some 50)
            |> Result.mapError ValidationError

        let! works =
            input.filterWorks input.search category offset limit
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
