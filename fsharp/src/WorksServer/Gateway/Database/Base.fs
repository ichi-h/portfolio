module WorksServer.Gateway.Database.Base

open System.Data.SQLite
open System.Collections.Generic
open System.Data
open System.Dynamic
open Dapper

let connectDB () =
    let connectionString =
        @"Data Source=/db/portfolio.sqlite3;Version=3;foreign keys=true"

    new SQLiteConnection(connectionString)

let joinQueries (queries: string list) =
    queries
    |> List.filter (fun (q) -> q <> "")
    |> String.concat " "

/// <summary>
/// Alternative operators for ternary operators.
///
/// #### Comparison
///
/// C#: `a ? b : c`
///
/// F#: `a ?= (b, c)`
/// </summary>
let (?=) (a: bool) (b, c) = if a then b else c

let private parameterize (parameters: list<string * string>) =
    parameters
    |> List.map (fun (key, value) -> (key, box value))
    |> Map

let runQuery<'Record> (sql: string) (connection: IDbConnection) : Result<'Record seq, string> =
    try
        Ok(connection.Query<'Record>(sql))
    with
    | _ as e -> Error e.Message

let runQueryWithParams<'Record>
    (sql: string)
    (param: list<string * string>)
    (connection: IDbConnection)
    : Result<'Record seq, string> =
    try
        let expando = ExpandoObject()
        let expandoDictionary = expando :> IDictionary<string, obj>

        for paramValue in parameterize param do
            expandoDictionary.Add(paramValue.Key, paramValue.Value)

        Ok(connection.Query<'Record>(sql, expando))
    with
    | _ as e -> Error e.Message

let execute (sql: string) (param: _) (connection: IDbConnection) =
    try
        let expando = ExpandoObject()
        let expandoDictionary = expando :> IDictionary<string, obj>

        for paramValue in parameterize param do
            expandoDictionary.Add(paramValue.Key, paramValue.Value)

        Ok(connection.Execute(sql, expando))
    with
    | _ as e -> Error e.Message
