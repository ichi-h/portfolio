module WorksServer.Gateway.Database.Queries.Works.UpdateOrCreate

open FsToolkit.ErrorHandling
open WorksServer.Entities.Work
open WorksServer.Gateway.Database.Base
open WorksServer.Gateway.Database.Records.Work

let updateOrCreateWork (work: Work) =
    let (workRecord, workLanguageRelationRecords, languageRecords) =
        workEntityToRecord work

    let workSql =
        @"INSERT OR REPLACE INTO works (slug, category, title, description, body, thumbnail_url, created_at, updated_at, published_at, unpublished_at) VALUES (@slug, @category, @title, @description, @body, @thumbnail_url, @created_at, @updated_at, @published_at, @unpublished_at);"

    let workQueryParams =
        [ ("slug", workRecord.slug)
          ("category", workRecord.category)
          ("title", workRecord.title)
          ("description", workRecord.description)
          ("body", workRecord.body)
          ("thumbnail_url", workRecord.thumbnail_url)
          ("created_at", workRecord.created_at.ToString "yyyy-MM-dd HH:mm:ss")
          ("updated_at", workRecord.updated_at.ToString "yyyy-MM-dd HH:mm:ss")
          ("published_at",
           if workRecord.published_at.HasValue then
               workRecord.published_at.Value.ToString "yyyy-MM-dd HH:mm:ss"
           else
               null)
          ("unpublished_at",
           if workRecord.unpublished_at.HasValue then
               workRecord.unpublished_at.Value.ToString "yyyy-MM-dd HH:mm:ss"
           else
               null) ]

    let languageSql = @"INSERT OR REPLACE INTO languages (name) VALUES (@name);"

    let languageQueryParams =
        languageRecords
        |> List.map (fun l -> [ ("name", l.name) ])

    let workLanguageRelationSql =
        @"INSERT OR REPLACE INTO work_language_relations (id, language_name, work_slug) VALUES (@id, @language_name, @work_slug);"

    let workLanguageRelationQueryParams =
        workLanguageRelationRecords
        |> List.map (fun wlr ->
            [ ("id", wlr.id)
              ("language_name", wlr.language_name)
              ("work_slug", wlr.work_slug) ])

    let runWork = async { return connectDB () |> execute workSql workQueryParams }

    let runLanguages =
        languageQueryParams
        |> List.map (fun queryParams -> async { return connectDB () |> execute languageSql queryParams })

    let runWorkLanguageRelations =
        workLanguageRelationQueryParams
        |> List.map (fun queryParams ->
            async {
                return
                    connectDB ()
                    |> execute workLanguageRelationSql queryParams
            })

    async {
        let isSuccess xs =
            xs |> Array.forall (fun res -> Result.isOk res)

        let result1 =
            runLanguages
            |> List.append [ runWork ]
            |> Async.Parallel
            |> Async.RunSynchronously
            |> isSuccess

        if result1 then
            let result2 =
                runWorkLanguageRelations
                |> Async.Parallel
                |> Async.RunSynchronously
                |> isSuccess

            if result2 then
                return Ok 0
            else
                return Error "fail to save work_language_relations"
        else
            return Error "fail to save works and languages"
    }
