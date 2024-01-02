open DotNetEnv
open Microsoft.AspNetCore.Builder
open Microsoft.Extensions.Hosting

open WorksServer

[<EntryPoint>]
let main args =
    let builder = WebApplication.CreateBuilder(args)
    let app = builder.Build()

    Routes.applyRoutes app

    Env.Load() |> ignore
    let origin = Env.GetString("APP_ORIGIN")
    app.Run(origin)

    0 // Exit code
