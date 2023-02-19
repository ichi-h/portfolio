{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Persistent.Queries.Works
  ( readAllWorks_,
    readWork_,
  )
where

import Data.Text (pack)
import Database.SQLite.Simple (Connection, Query (..), query_)
import Domain.Entities.Work (Work)
import Domain.Infrastructures.Persistent.Records.Work (WorkR, workRToEntity)

select :: String
select =
  "SELECT w.*, a.id, a.body, t2.* from works w "
    ++ "INNER JOIN taggings t1 ON w.id = t1.work_id "
    ++ "INNER JOIN tags t2 ON t1.tag_id = t2.id "
    ++ "LEFT JOIN articles a ON w.id = a.work_id "

readAllWorks_ :: Connection -> IO [Work]
readAllWorks_ conn = do
  let where' = "WHERE w.published_at IS NOT NULL and w.unpublished_at IS NULL"
      q = Query {fromQuery = pack $ select ++ where'}
  records <- query_ conn q :: IO [WorkR]
  pure $ workRToEntity records

readWork_ :: Connection -> String -> IO (Either String Work)
readWork_ conn slug = do
  let where' = "WHERE w.published_at IS NOT NULL AND w.unpublished_at IS NULL AND w.slug = '" ++ slug ++ "'"
      q = Query {fromQuery = pack $ select ++ where'}
  records <- query_ conn q :: IO [WorkR]
  case records of
    [] -> pure $ Left "No articles found."
    _ -> pure $ Right $ head $ workRToEntity records
