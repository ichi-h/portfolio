module WorksServer.Controllers.Validations

open System

let openWith (property: string) value = (property, value)

let close (_, value) = value

module Number =
    let isInt (property, a: string) =
        match Int16.TryParse a with
        | (true, value) -> Ok((property, int value))
        | _ -> Error(sprintf "%A must be int" property)

module Required =
    let isExist (property, a) =
        match a with
        | "" -> Error(sprintf "%A is required" property)
        | _ ->
            match box a with
            | null -> Error(sprintf "%A is required" property)
            | _ -> Ok(property, a)

module Option =
    let parse (property, a) =
        match box a with
        | null -> (property, None)
        | _ -> (property, Some(a))
