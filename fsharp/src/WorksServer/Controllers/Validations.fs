module WorksServer.Controllers.Validations

open System

type UnprocessableEntities = { param: string; message: string }

let throw param message = { param = param; message = message }

module Number =
    let isInt (a: string) =
        match Int16.TryParse a with
        | (true, value) -> int value |> Ok
        | _ -> Error "must be int"

module Required =
    let exists (a: string) =
        match a with
        | "" -> Error "required"
        | _ ->
            match box a with
            | null -> Error "required"
            | _ -> Ok a

    let parseOption a =
        match box a with
        | null -> None
        | _ -> Some a
