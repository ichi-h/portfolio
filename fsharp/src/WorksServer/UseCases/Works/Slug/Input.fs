module WorksServer.UseCases.Works.Slug.Input

type GetAllWorkSlugs = Result<string seq, string>

type GetAllWorkSlugsInput = { getAllWorkSlugs: GetAllWorkSlugs }
