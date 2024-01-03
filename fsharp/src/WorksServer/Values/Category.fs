module WorksServer.Values.Category

type Category =
    | Philosophy = 1
    | Development = 2
    | Music = 3
    | Photograph = 4

let parseCategory (category: string) =
    match category with
    | "philosophy" -> Some Category.Philosophy
    | "development" -> Some Category.Development
    | "music" -> Some Category.Music
    | "photograph" -> Some Category.Photograph
    | _ -> None

let categoryToString (category: Category) =
    match category with
    | Category.Philosophy -> "philosophy"
    | Category.Development -> "development"
    | Category.Music -> "music"
    | Category.Photograph -> "photograph"
    | _ -> "unknown"
