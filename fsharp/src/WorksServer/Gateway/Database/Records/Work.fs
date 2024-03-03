module WorksServer.Gateway.Database.Records.Work

open System
open FsToolkit.ErrorHandling
open WorksServer.Entities.Work
open WorksServer.Entities.Language
open WorksServer.Gateway.Database.Records.Language
open WorksServer.Gateway.Database.Records.WorkLanguageRelation
open WorksServer.Values.Category

type WorkRecord =
    { slug: string
      category: string
      title: string
      description: string
      thumbnail_url: string
      body: string
      created_at: DateTime
      updated_at: DateTime
      published_at: DateTime Nullable
      unpublished_at: DateTime Nullable }

type WorkRecordWithRelationRecord =
    { slug: string
      category: string
      title: string
      description: string
      thumbnail_url: string
      body: string
      created_at: DateTime
      updated_at: DateTime
      published_at: DateTime Nullable
      unpublished_at: DateTime Nullable
      // language_name IS NULLABLE
      language_name: string }

let baseSelect =
    @"SELECT w.*, wlr.language_name FROM works w LEFT JOIN work_language_relations wlr ON w.slug = wlr.work_slug"

let rec private uniqueLanguages (xs: Language list) (records: WorkRecordWithRelationRecord list) : Language list =
    match records with
    | record :: rest ->
        match record.language_name with
        | null -> uniqueLanguages xs rest
        | l ->
            let isContained =
                xs
                |> List.map (fun x -> x.name)
                |> List.contains l

            if isContained then
                uniqueLanguages xs rest
            else
                let newXs = xs |> List.append [ { name = l } ]
                uniqueLanguages newXs rest
    | _ -> xs

let workRecordToEntity (records: WorkRecordWithRelationRecord seq) : Work seq =
    let uniqueRecords =
        records
        |> Seq.distinctBy (fun record -> record.slug)

    uniqueRecords
    |> Seq.map (fun record ->
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
          languages =
            records
            |> Seq.filter (fun r -> r.slug = record.slug)
            |> List.ofSeq
            |> uniqueLanguages []
          publishedAt =
            if record.published_at.HasValue then
                Some record.published_at.Value
            else
                None
          unpublishedAt =
            if record.unpublished_at.HasValue then
                Some record.unpublished_at.Value
            else
                None })

let workEntityToRecord (entity: Work) : (WorkRecord * WorkLanguageRelationRecord list * LanguageRecord list) =
    let workRecord =
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

    let workLanguageRelationRecords =
        entity.languages
        |> List.map (fun language ->
            { id = entity.slug + "__" + language.name
              work_slug = entity.slug
              language_name = language.name })

    let languageRecords =
        entity.languages
        |> List.map languageEntityToRecord

    (workRecord, workLanguageRelationRecords, languageRecords)
