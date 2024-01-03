module WorksServer.Entities.Work

open System
open WorksServer.Values.Category

type Work =
    { slug: string
      category: Category
      title: string
      description: string
      body: string
      thumbnailUrl: string
      publishedAt: DateTime
      updatedAt: DateTime }
