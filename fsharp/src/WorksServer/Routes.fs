module WorksServer.Routes

open FSharp.MinimalApi.Builder
open WorksServer.Controllers

let routes =
    endpoints {
        get "/works/ping" Controller.pongResponse
        get "/works/filter" Works.filter
    }
