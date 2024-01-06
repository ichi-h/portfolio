module WorksServer.Gateway.Database.Parsers.Work

open WorksServer.Entities.Work
open WorksServer.Gateway.Database.Records.Work
open WorksServer.Values.Category

let workRecordToEntity record : Work =
    { slug = record.slug
      category = createCategory record.category
      title = record.title
      description = record.description
      body = record.body
      thumbnailUrl = record.thumbnail_url
      createdAt = record.created_at
      updatedAt = record.updated_at
      publishedAt = record.published_at
      unpublishedAt = record.unpublished_at }
