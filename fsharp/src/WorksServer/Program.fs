open System
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.Hosting

open WorksServer

[<EntryPoint>]
let main args =
    let builder = WebApplication.CreateBuilder(args)
    let app = builder.Build()

    app.MapGet("/ping", Func<IResult> Controller.pongResponse)
    |> ignore

    app.Run()

    0 // Exit code
