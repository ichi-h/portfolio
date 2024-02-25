module WorksServer.Gateway.API.Notion.Index

open DotNetEnv
open FsToolkit.ErrorHandling
open System.Net.Http
open System.Net.Http.Json
open WorksServer.UseCases.Works.Redeploy.Input

let fetchAllPages =
    Env.Load() |> ignore
    let origin = Env.GetString("NOTION_SERVER_ORIGIN")

    task {
        use client = new HttpClient()
        return! client.GetFromJsonAsync<Page list>(origin + "/pages")
    }
    |> Async.AwaitTask

type Text = { text: string }

let fetchPageBodyById (pageId: string) =
    Env.Load() |> ignore
    let origin = Env.GetString("NOTION_SERVER_ORIGIN")

    task {
        use client = new HttpClient()
        let! response = client.GetFromJsonAsync<Text>(origin + "/blocks/" + pageId)
        return response.text
    }
    |> Async.AwaitTask
