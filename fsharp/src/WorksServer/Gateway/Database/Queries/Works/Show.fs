module WorksServer.Gateway.Database.Queries.Works.Show

open FsToolkit.ErrorHandling
open WorksServer.Gateway.Database.Base
open WorksServer.Gateway.Database.Records.Work

let showWork (slug: string) =
    let sql =
        joinQueries [ baseSelect
                      @"WHERE slug = @slug AND published_at IS NOT NULL AND unpublished_at IS NULL LIMIT 1" ]

    let queryParams = [ ("slug", slug) ]

    result {
        let! records =
            connectDB ()
            |> runQueryWithParams<WorkRecordWithRelationRecord> sql queryParams

        match Seq.length records with
        | 0 -> return! Ok None
        | _ ->
            return!
                records
                |> workRecordToEntity
                |> Seq.head
                |> Some
                |> Ok
    }
