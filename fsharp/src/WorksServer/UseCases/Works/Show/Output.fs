module WorksServer.UseCases.Works.Show.Output

type SummarizedWork =
    { slug: string
      category: string
      title: string
      description: string
      body: string
      thumbnailUrl: string
      publishedAt: string
      updatedAt: string }

type ShowWorkSuccess = SummarizedWork

type ShowWorkError =
    | NotFoundError
    | InfrastructureError of string

type ShowWorkOutput = Result<ShowWorkSuccess, ShowWorkError>
