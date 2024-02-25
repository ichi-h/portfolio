module WorksServer.Gateway.Database.Parsers.Work

open FsToolkit.ErrorHandling
open WorksServer.Entities.Work
open WorksServer.Gateway.Database.Records.Work
open WorksServer.Values.Category

let workRecordToEntity record : Work =
    { slug = record.slug
      category =
        createCategory record.category
        |> Result.defaultValue Category.Unknown
      title = record.title
      description = record.description
      body = record.body
      thumbnailUrl = record.thumbnail_url
      createdAt = record.created_at
      updatedAt = record.updated_at
      publishedAt =
        if record.published_at.HasValue then
            Some record.published_at.Value
        else
            None
      unpublishedAt =
        if record.unpublished_at.HasValue then
            Some record.unpublished_at.Value
        else
            None }

let workEntityToRecord (entity: Work) =
    { slug = entity.slug
      category = entity.category |> categoryToString
      title = entity.title
      description = entity.description
      body = entity.body
      thumbnail_url = entity.thumbnailUrl
      created_at = entity.createdAt
      updated_at = entity.updatedAt
      published_at = entity.publishedAt |> Option.toNullable
      unpublished_at = entity.unpublishedAt |> Option.toNullable }
