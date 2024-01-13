open DotNetEnv
open Microsoft.AspNetCore.Builder
open Microsoft.Extensions.DependencyInjection
open WorksServer.Routes

[<EntryPoint>]
let main args =
    Env.Load() |> ignore

    let builder = WebApplication.CreateBuilder(args)

    builder.Services.AddCors() |> ignore

    let app = builder.Build()

    let clientOrigin = Env.GetString("CLIENT_ORIGIN")

    app.UseCors (fun builder ->
        builder
            .WithOrigins(clientOrigin)
            .AllowAnyHeader()
            .AllowAnyMethod()

        |> ignore

        ())
    |> ignore

    app |> routes.Apply |> ignore

    let appOrigin = Env.GetString("APP_ORIGIN")
    app.Run(appOrigin)

    0 // Exit code
