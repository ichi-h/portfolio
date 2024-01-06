module WorksServer.Routes

open FSharp.MinimalApi.Builder
open WorksServer.Controllers

let routes = endpoints { get "/works/filter" Works.filter }
