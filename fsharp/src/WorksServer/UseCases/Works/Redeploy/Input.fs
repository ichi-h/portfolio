module WorksServer.UseCases.Works.Redeploy.Input

open WorksServer.Entities.Work

type Page =
    { id: string
      slug: string
      category: string
      title: string
      description: string
      thumbnailUrl: string
      languages: string list
      publishedAt: string option
      unpublishedAt: string option
      createdAt: string
      updatedAt: string }

type FetchAllPagesFromCMS = Async<Page list>

type FetchPageBodyFromCMS = string -> Async<string>

type UpdateOrCreateWork = Work -> Async<Result<int, string>>

type RedeployWorksInput =
    { fetchAllPageFromCMS: FetchAllPagesFromCMS
      fetchPageBodyFromCMS: FetchPageBodyFromCMS
      updateOrCreateWork: UpdateOrCreateWork }
