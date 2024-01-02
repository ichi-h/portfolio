module WorksServer.Routes

open System
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Http

let applyRoutes (app: WebApplication) =
    app.MapGet("/works/ping", Func<IResult> Controller.pongResponse)
    |> ignore
