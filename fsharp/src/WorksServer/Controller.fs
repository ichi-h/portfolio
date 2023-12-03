module WorksServer.Controller

open Microsoft.AspNetCore.Http

type PongResponse = { Pong: bool }

let pongResponse () : IResult = Results.Ok { Pong = true }
