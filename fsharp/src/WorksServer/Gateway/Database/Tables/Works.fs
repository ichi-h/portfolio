module WorksServer.Gateway.Database.Tables.Works

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
      published_at: DateTime
      unpublished_at: DateTime }
