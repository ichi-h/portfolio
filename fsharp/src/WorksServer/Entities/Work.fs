module WorksServer.Entities.Work

open System
open WorksServer.Values.Category
open WorksServer.Entities.Language

type Work =
    { slug: string
      category: Category
      title: string
      description: string
      body: string
      thumbnailUrl: string
      languages: Language list
      createdAt: DateTime
      updatedAt: DateTime
      publishedAt: DateTime option
      unpublishedAt: DateTime option }
