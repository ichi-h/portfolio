module WorksServer.Utils.Nullable

let nullToOptional a =
    match box a with
    | null -> None
    | _ -> Some a

let nullToDefaultValue a defaultValue =
    match box a with
    | null -> defaultValue
    | _ -> a
