module WorksServer.UseCases.Works.Filter.Input

open WorksServer.Entities.Work
open WorksServer.Utils.HttpException
open WorksServer.Values.Category

type FilterWorks = Option<string> -> Option<Category> -> int -> int -> Work seq

type FilterInput =
    { filterWorks: FilterWorks
      search: Option<string>
      category: Option<Category>
      offset: int
      limit: int }

let validateFilterInput (input: FilterInput) =
    match (input.offset >= 0, input.limit >= 1 && input.limit <= 50) with
    | (true, true) -> Ok input
    | (false, _) ->
        Error
            { status = StatusCode.UnprocessableEntity
              message = "offset must be greater than or equal to 0" }
    | (_, false) ->
        Error
            { status = StatusCode.UnprocessableEntity
              message = "limit must be between 1 and 50" }
