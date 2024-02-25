module WorksServer.Gateway.Database.Records.Work

open System

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
