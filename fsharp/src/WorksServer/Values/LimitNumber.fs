module WorksServer.Values.LimitNumber

type LimitNumber<'TNumber when 'TNumber: comparison> = 'TNumber

let createLimitNumber<'TNumber when 'TNumber: comparison>
    (min: Option<'TNumber>)
    (max: Option<'TNumber>)
    (value: 'TNumber)
    : Result<LimitNumber<'TNumber>, string> =
    match (min, max) with
    | (Some someMin, Some someMax) ->
        if value >= someMin && value <= someMax then
            Ok value
        else
            Error(sprintf "must be between %A and %A" someMin someMax)
    | (None, Some someMax) ->
        if value <= someMax then
            Ok value
        else
            Error(sprintf "must be lower than or equal to %A" max)
    | (Some someMin, None) ->
        if value >= someMin then
            Ok value
        else
            Error(sprintf "must be greater than or equal to %A" min)
    | (None, None) -> Ok value
