module WorksServer.Routes

open FSharp.MinimalApi.Builder

let routes =
    endpoints {
        post "/works/redeploy" (Controllers.Works.redeploy UseCases.Works.Redeploy.Interactor.interactor)
        get "/works/filter" (Controllers.Works.filter UseCases.Works.Filter.Interactor.interactor)
        get "/works/slug" (Controllers.Works.slug UseCases.Works.Slug.Interactor.interactor)
        get "/works/{slug}" (Controllers.Works.show UseCases.Works.Show.Interactor.interactor)
    }
