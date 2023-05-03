{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Persistent.Queries.Tags
  ( readAllTags_,
  )
where

import Data.Text (pack)
import Database.SQLite.Simple (Connection, Query (..), query_)
import Domain.Entities.Tag (Tag)
import Domain.Infrastructures.Persistent.Records.Tag (TagR, toEntity)

readAllTags_ :: Connection -> IO [Tag]
readAllTags_ conn = do
  let q = Query {fromQuery = pack "SELECT * FROM tags"}
  records <- query_ conn q :: IO [TagR]
  pure $ toEntity records
