module WorksServer.Values.Offset

type Offset = int

let createOffset a : Result<Offset, string> =
    if a >= 0 then
        Ok a
    else
        Error "must be greater than or equal to 0"
