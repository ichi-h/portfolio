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

let filter (usecase: FilterWorksUseCase) (request: FilterRequest) =
    let outputResult =
        result {
            let search = Validations.parseOption request.search

            let! category =
                match Validations.parseOption request.category with
                | Some category -> createCategory category |> Result.map Some
                | None -> Ok None

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

            return! usecase input |> Ok
        }

    match outputResult with
    | Ok output ->
        match output with
        | Ok success -> Results.Ok success
        | Error failure ->
            match failure with
            | InfrastructureError message -> Results.StatusCode 500
    | Error e -> Results.UnprocessableEntity e
