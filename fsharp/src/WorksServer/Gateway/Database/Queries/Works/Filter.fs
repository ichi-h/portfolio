module WorksServer.Gateway.Database.Queries.Works.Filter

open FsToolkit.ErrorHandling
open WorksServer.Gateway.Database.Base
open WorksServer.Gateway.Database.Parsers.Work
open WorksServer.Gateway.Database.Records.Work
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
    let sql =
        joinQueries [ selectFrom
                      "WHERE"
                      Option.isSome search ?= ("(", "")
                      Option.isSome search ?= (whereTitle, "")
                      Option.isSome search ?= ("OR", "")
                      Option.isSome search ?= (whereBody, "")
                      Option.isSome search ?= ("OR", "")
                      Option.isSome search ?= (whereDescription, "")
                      Option.isSome search ?= (")", "")
                      Option.isSome search ?= ("AND", "")
                      Option.isSome category ?= (whereCategory, "")
                      Option.isSome category ?= ("AND", "")
                      wherePublished
                      "AND"
                      whereUnpublished
                      orderBy
                      limitBy
                      offsetBy ]

    let searchString = search |> Option.defaultValue ""

    let categoryString =
        category
        |> Option.map categoryToString
        |> Option.defaultValue ""

    let queryParams =
        parameterize [ ("search", "%" + searchString + "%")
                       ("category", categoryString)
                       ("offset", string offset)
                       ("limit", string limit) ]

    result {
        let! records =
            connectDB
            |> runQueryWithParams<WorkRecord> sql queryParams

        return! records |> Seq.map workRecordToEntity |> Ok
    }
