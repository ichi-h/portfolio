module WorksServer.Controllers.Works

open FsToolkit.ErrorHandling
open Microsoft.AspNetCore.Http
open Microsoft.AspNetCore.Mvc
open WorksServer.Controllers
open WorksServer.Gateway.Database.Queries.Works.Filter
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Interactor
open WorksServer.UseCases.Works.Filter.Output
open WorksServer.Values.Category
open WorksServer.Values.LimitNumber
open WorksServer.Values.Offset

type FilterRequest =
    { [<FromQuery>]
      search: string
      [<FromQuery>]
      category: string
      [<FromQuery>]
      offset: string
      [<FromQuery>]
      limit: string }

let filter (request: FilterRequest) =
    let outputResult =
        result {
            let search =
                Validations.openWith "search" request.search
                |> Validations.Option.parse
                |> Validations.close

            let category =
                Validations.openWith "category" request.category
                |> Validations.Option.parse
                |> Validations.close
                |> Option.map createCategory

            let! offset =
                Validations.openWith "offset" request.offset
                |> Validations.Required.isExist
                |> Result.bind Validations.Number.isInt
                |> Result.map Validations.close
                |> Result.bind createOffset

            let! limit =
                Validations.openWith "limit" request.limit
                |> Validations.Required.isExist
                |> Result.bind Validations.Number.isInt
                |> Result.map Validations.close
                |> Result.bind (createLimitNumber (Some 1) (Some 50))

            let input =
                { filterWorks = filterWorks
                  search = search
                  category = category
                  offset = offset
                  limit = limit }

            return! Ok(filterWorksInteractor input)
        }

    match outputResult with
    | Ok output ->
        match output with
        | Ok success -> Results.Ok success
        | Error failure ->
            match failure with
            | InfrastructureError message -> Results.Problem "Internal Server Error"
    | Error e -> Results.UnprocessableEntity e
