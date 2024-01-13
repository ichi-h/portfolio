module WorksServer.UseCases.Works.Slug.Interactor

open FsToolkit.ErrorHandling
open WorksServer.UseCases.Works.Slug.Input
open WorksServer.UseCases.Works.Slug.Output

type GetAllWorkSlugsUseCase = GetAllWorkSlugsInput -> GetAllWorkSlugsOutput

let interactor (input: GetAllWorkSlugsInput) : GetAllWorkSlugsOutput =
    result {
        let! slugs =
            input.getAllWorkSlugs
            |> Result.mapError InfrastructureError

        return! Ok slugs
    }
