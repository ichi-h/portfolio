module WorksServer.UseCases.Works.Redeploy.Output

type RedeployWorksSuccess = { message: string }

type RedeployWorksError = InfrastructureError of string

type RedeployWorksOutput = Async<Result<RedeployWorksSuccess, RedeployWorksError>>
