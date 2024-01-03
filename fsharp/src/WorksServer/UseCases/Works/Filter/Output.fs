module WorksServer.UseCases.Works.Filter.Output

open WorksServer.UseCases.Base

type SummarizedWork =
    { slug: string
      category: string
      title: string
      description: string
      thumbnailUrl: string
      publishedAt: string
      updatedAt: string }

type FilterWorksSuccess =
    { total: int
      works: SummarizedWork list }

type FilterWorksOutput = Async<Result<FilterWorksSuccess, UseCaseError>>
