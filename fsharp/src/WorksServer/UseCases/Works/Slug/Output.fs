module WorksServer.UseCases.Works.Slug.Output

type GetAllWorkSlugsError = InfrastructureError of string

type GetAllWorkSlugsOutput = Result<string seq, GetAllWorkSlugsError>
