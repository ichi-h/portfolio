module WorksServer.Gateway.Database.Queries.Works.Filter

open FsToolkit.ErrorHandling
open WorksServer.Gateway.Database.Base
open WorksServer.Gateway.Database.Parsers.Works
open WorksServer.Gateway.Database.Tables.Works
open WorksServer.Values.Category
open WorksServer.Values.LimitNumber
open WorksServer.Values.Offset

let private selectFrom = @"SELECT * FROM works"

let private whereTitle = @"title LIKE @search"

let private whereBody = @"body LIKE @search"

let private whereDescription = @"description LIKE @search"

let private whereCategory = @"category = @category"

let private wherePublished = @"published_at IS NOT NULL"

let private whereUnpublished = @"unpublished_at IS NULL"

let private orderBy = @"ORDER BY published_at DESC"

let private limitBy = @"LIMIT @limit"

let private offsetBy = @"OFFSET @offset"

let filterWorks (search: Option<string>) (category: Option<Category>) (offset: Offset) (limit: LimitNumber<int>) =
    let overrideSome value option =
        match option with
        | Some _ -> Some value
        | None -> None

    let sql =
        joinQueries [ Some selectFrom
                      Some "WHERE"
                      search |> overrideSome "("
                      search |> overrideSome whereTitle
                      search |> overrideSome "OR"
                      search |> overrideSome whereBody
                      search |> overrideSome "OR"
                      search |> overrideSome whereDescription
                      search |> overrideSome ")"
                      search |> overrideSome "AND"
                      category |> overrideSome whereCategory
                      category |> overrideSome "AND"
                      Some wherePublished
                      Some "AND"
                      Some whereUnpublished
                      Some orderBy
                      Some limitBy
                      Some offsetBy ]

    let searchString = search |> Option.defaultValue ""

    let categoryString =
        category
        |> Option.map categoryToString
        |> Option.defaultValue ""

    let queryParams =
        [ ("search", "%" + searchString + "%")
          ("category", categoryString)
          ("offset", string offset)
          ("limit", string limit) ]
        |> List.filter (fun (_, value) -> value <> "")
        |> List.map (fun (key, value) -> (key, box value))
        |> Map

    result {
        let! records =
            connectDB
            |> runQueryWithParams<WorkRecord> sql queryParams

        return! Ok(records |> Seq.map workRecordToEntity)
    }
