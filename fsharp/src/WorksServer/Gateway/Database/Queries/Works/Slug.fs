module WorksServer.Gateway.Database.Queries.Works.Slug

open FsToolkit.ErrorHandling
open WorksServer.Gateway.Database.Base

let getAllWorkSlugs =
    let sql = "SELECT slug FROM works"

    result {
        let! records = connectDB |> runQuery<string> sql
        return! Ok records
    }
