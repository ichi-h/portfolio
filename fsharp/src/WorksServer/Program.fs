open System
open DotNetEnv
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.Hosting

open WorksServer

[<EntryPoint>]
let main args =
    let builder = WebApplication.CreateBuilder(args)
    let app = builder.Build()

    Env.Load() |> ignore
    let origin = Env.GetString("APP_ORIGIN")

    app.MapGet("/works/ping", Func<IResult> Controller.pongResponse)
    |> ignore

    app.Run(origin)

    0 // Exit code
