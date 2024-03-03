module WorksServer.Gateway.Database.Records.Language

open WorksServer.Entities.Language

type LanguageRecord = { name: string }

let languageRecordToEntity (record: LanguageRecord) = { name = record.name }

let languageEntityToRecord (entity: Language) = { name = entity.name }
