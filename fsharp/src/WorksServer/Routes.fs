module WorksServer.Routes

open FSharp.MinimalApi.Builder

let routes =
    endpoints { get "/works/filter" (Controllers.Works.filter UseCases.Works.Filter.Interactor.interactor) }
