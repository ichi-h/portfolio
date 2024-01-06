module WorksServer.Values.Category

type Category =
    | Philosophy = 1
    | Development = 2
    | Music = 3
    | Photograph = 4
    | Unknown = 5

let createCategory (category: string) =
    match category with
    | "philosophy" -> Ok Category.Philosophy
    | "development" -> Ok Category.Development
    | "music" -> Ok Category.Music
    | "photograph" -> Ok Category.Photograph
    | _ -> Error "must be 'philosophy', 'development', 'music' or 'photograph'"

let categoryToString (category: Category) =
    match category with
    | Category.Philosophy -> "philosophy"
    | Category.Development -> "development"
    | Category.Music -> "music"
    | Category.Photograph -> "photograph"
    | _ -> "unknown"
