open DotNetEnv
open Microsoft.AspNetCore.Builder
open WorksServer.Routes

[<EntryPoint>]
let main args =
    let builder = WebApplication.CreateBuilder(args)
    let app = builder.Build()

    app |> routes.Apply |> ignore

    Env.Load() |> ignore
    let origin = Env.GetString("APP_ORIGIN")
    app.Run(origin)

    0 // Exit code
