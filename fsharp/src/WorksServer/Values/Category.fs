module WorksServer.Values.Category

type Category =
    | Philosophy = 1
    | Development = 2
    | Music = 3
    | Photograph = 4
    | Unknown = 5

let createCategory (category: string) =
    match category with
    | "philosophy" -> Category.Philosophy
    | "development" -> Category.Development
    | "music" -> Category.Music
    | "photograph" -> Category.Photograph
    | _ -> Category.Unknown

let categoryToString (category: Category) =
    match category with
    | Category.Philosophy -> "philosophy"
    | Category.Development -> "development"
    | Category.Music -> "music"
    | Category.Photograph -> "photograph"
    | _ -> "unknown"
