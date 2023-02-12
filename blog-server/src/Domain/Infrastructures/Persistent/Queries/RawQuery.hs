module Domain.Infrastructures.Persistent.Queries.RawQuery
  ( runRawQuery_,
  )
where

import Data.Text
import Database.SQLite.Simple (Connection, Query (..), execute)

runRawQuery_ :: Connection -> Text -> IO ()
runRawQuery_ conn sql = execute conn Query {fromQuery = sql} ()
