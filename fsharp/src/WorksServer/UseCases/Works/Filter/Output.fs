module WorksServer.UseCases.Works.Filter.Output

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
      works: SummarizedWork seq }

type FilterWorksError = InfrastructureError of string

type FilterWorksOutput = Result<FilterWorksSuccess, FilterWorksError>
