module WorksServer.Controllers.Works

open FsToolkit.ErrorHandling
open Microsoft.AspNetCore.Http
open Microsoft.AspNetCore.Mvc
open WorksServer.Controllers
open WorksServer.Gateway.Database.Queries.Works.Filter
open WorksServer.Gateway.Database.Queries.Works.Show
open WorksServer.Gateway.Database.Queries.Works.Slug
open WorksServer.UseCases.Works
open WorksServer.UseCases.Works.Filter.Input
open WorksServer.UseCases.Works.Filter.Interactor
open WorksServer.UseCases.Works.Show.Input
open WorksServer.UseCases.Works.Show.Interactor
open WorksServer.UseCases.Works.Slug.Input
open WorksServer.UseCases.Works.Slug.Interactor
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
            let search = Validations.Required.parseOption request.search

            let! category =
                match Validations.Required.parseOption request.category with
                | Some category ->
                    createCategory category
                    |> Result.map Some
                    |> Result.mapError (Validations.throw "category")
                | None -> Ok None

            let! offset =
                Validations.Required.exists request.offset
                |> Result.bind Validations.Number.isInt
                |> Result.bind createOffset
                |> Result.mapError (Validations.throw "offset")

            let! limit =
                Validations.Required.exists request.limit
                |> Result.bind Validations.Number.isInt
                |> Result.bind (createLimitNumber (Some 1) (Some 50))
                |> Result.mapError (Validations.throw "limit")

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
            | Filter.Output.InfrastructureError message -> Results.StatusCode 500
    | Error e -> Results.UnprocessableEntity e

type ShowRequest =
    { [<FromRoute>]
      slug: string }

let show (usecase: ShowWorkUseCase) (request: ShowRequest) =
    let outputResult =
        result {
            let! slug =
                Validations.Required.exists request.slug
                |> Result.mapError (Validations.throw "slug")

            return! usecase { showWork = showWork; slug = slug } |> Ok
        }

    match outputResult with
    | Ok output ->
        match output with
        | Ok success -> Results.Ok success
        | Error failure ->
            match failure with
            | Show.Output.NotFoundError ->
                sprintf "/%s work is not found" request.slug
                |> Results.NotFound
            | Show.Output.InfrastructureError message -> Results.StatusCode 500
    | Error e -> Results.UnprocessableEntity e

let slug (usecase: GetAllWorkSlugsUseCase) _ =
    let outputResult = usecase { getAllWorkSlugs = getAllWorkSlugs }

    match outputResult with
    | Ok success -> Results.Ok success
    | Error failure ->
        match failure with
        | Slug.Output.InfrastructureError message -> Results.StatusCode 500
