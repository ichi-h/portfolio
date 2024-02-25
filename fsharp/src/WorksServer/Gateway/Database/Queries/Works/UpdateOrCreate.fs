module WorksServer.Gateway.Database.Queries.Works.UpdateOrCreate

open WorksServer.Entities.Work
open WorksServer.Gateway.Database.Base
open WorksServer.Gateway.Database.Parsers.Work
open WorksServer.Gateway.Database.Records.Work

let updateOrCreateWork (work: Work) =
    let record = workEntityToRecord work

    let sql =
        @"INSERT OR REPLACE INTO works (slug, category, title, description, body, thumbnail_url, created_at, updated_at, published_at, unpublished_at) VALUES (@slug, @category, @title, @description, @body, @thumbnail_url, @created_at, @updated_at, @published_at, @unpublished_at)"

    let queryParams =
        [ ("slug", record.slug)
          ("category", record.category)
          ("title", record.title)
          ("description", record.description)
          ("body", record.body)
          ("thumbnail_url", record.thumbnail_url)
          ("created_at", record.created_at.ToString "yyyy-MM-dd HH:mm:ss")
          ("updated_at", record.updated_at.ToString "yyyy-MM-dd HH:mm:ss")
          ("published_at",
           if record.published_at.HasValue then
               record.published_at.Value.ToString "yyyy-MM-dd HH:mm:ss"
           else
               null)
          ("unpublished_at",
           if record.unpublished_at.HasValue then
               record.unpublished_at.Value.ToString "yyyy-MM-dd HH:mm:ss"
           else
               null) ]

    async { return connectDB |> execute sql queryParams }
