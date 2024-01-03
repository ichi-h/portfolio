module WorksServer.UseCases.Works.Filter.Input

open WorksServer.Entities.Work
open WorksServer.UseCases.Base
open WorksServer.Values.Category

type FilterWorks = string -> Category -> int -> int -> Async<Option<Work list>>

type FilterInput =
    { filterWorks: FilterWorks
      search: string
      category: Category
      offset: int
      limit: int }

let validateFilterInput (input: FilterInput) =
    if input.offset < 0 then
        Error
            { status = ErrorStatus.UnprocessableEntity
              message = "offset must be greater than or equal to 0" }
    elif input.limit < 1 then
        Error
            { status = ErrorStatus.UnprocessableEntity
              message = "limit must be greater than or equal to 1" }
    else
        Ok input
