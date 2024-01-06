module WorksServer.UseCases.Works.Filter.Input

open WorksServer.Entities.Work
open WorksServer.Values.Category
open WorksServer.Values.LimitNumber
open WorksServer.Values.Offset

type FilterWorks = Option<string> -> Option<Category> -> Offset -> LimitNumber<int> -> Result<Work seq, string>

type FilterWorksInput =
    { filterWorks: FilterWorks
      search: Option<string>
      category: Option<Category>
      offset: Offset
      limit: LimitNumber<int> }
