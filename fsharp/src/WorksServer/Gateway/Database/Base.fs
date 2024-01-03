module WorksServer.Gateway.Database.Base

open System.Data.SQLite
open System.Collections.Generic
open System.Data
open System.Dynamic
open Dapper

let connectDB =
    let connectionString =
        @"Data Source=/db/portfolio.sqlite3;Version=3;foreign keys=true"

    new SQLiteConnection(connectionString)

let joinQueries (queries: Option<string> list) =
    queries
    |> List.choose (function
        | Some q -> Some q
        | None -> None)
    |> String.concat " "

let runQuery<'Result> (sql: string) (connection: IDbConnection) : 'Result seq = connection.Query<'Result>(sql)

let runQueryWithParams<'Result> (sql: string) (param: Map<string, _>) (connection: IDbConnection) : 'Result seq =
    let expando = ExpandoObject()
    let expandoDictionary = expando :> IDictionary<string, obj>

    for paramValue in param do
        expandoDictionary.Add(paramValue.Key, paramValue.Value :> obj)

    connection.Query<'Result>(sql, expando)

let execute (sql: string) (param: _) (connection: IDbConnection) = connection.Execute(sql, param)
