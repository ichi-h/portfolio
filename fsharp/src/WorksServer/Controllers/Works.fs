module WorksServer.Controllers.Works

open System
open FsToolkit.ErrorHandling
open Microsoft.AspNetCore.Http
open Microsoft.AspNetCore.Mvc
open WorksServer.Gateway.Database.Queries.Works.Filter
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Interactor
open WorksServer.Utils.Nullable
open WorksServer.Values.Category

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
    // TODO: refactor
    let search = nullToOptional request.search

    // TODO: refactor
    let category =
        match nullToOptional request.category with
        | Some value -> parseCategory value |> Some
        | None -> None

    // TODO: refactor
    let offset =
        match nullToDefaultValue request.offset "-1"
              |> Int16.TryParse
            with
        | (true, value) -> int value
        | _ -> -1

    // TODO: refactor
    let limit =
        match nullToDefaultValue request.limit "-1"
              |> Int16.TryParse
            with
        | (true, value) -> int value
        | _ -> -1

    let response =
        result {
            let! input =
                validateFilterInput
                    { filterWorks = filterWorks
                      search = search
                      category = category
                      offset = offset
                      limit = limit }

            let output = filterWorksInteractor input

            return! Ok output
        }

    // TODO: refactor
    match response with
    | Ok value -> Results.Ok value
    | Error error -> Results.Ok error
