{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Persistent.Queries.Works
  ( readAllWorks_,
    readWork_,
    filterWork_,
  )
where

import Data.Text (Text, pack)
import Database.SQLite.Simple (Connection, Query (..), query_)
import Domain.Entities.Work (Work)
import Domain.Infrastructures.Persistent.Records.Work (WorkR, toEntity)

select :: Text
select =
  pack $
    "SELECT w.*, a.id, a.body, t2.* from works w "
      ++ "INNER JOIN taggings t1 ON w.id = t1.work_id "
      ++ "INNER JOIN tags t2 ON t1.tag_id = t2.id "
      ++ "LEFT JOIN articles a ON w.id = a.work_id "

baseWhere :: Text
baseWhere =
  pack $ "WHERE w.published_at IS NOT NULL and w.unpublished_at IS NULL "

readAllWorks_ :: Connection -> IO [Work]
readAllWorks_ conn = do
  let q = Query {fromQuery = select <> baseWhere}
  records <- query_ conn q :: IO [WorkR]
  pure $ toEntity records

readWork_ :: Connection -> Text -> IO (Either Text Work)
readWork_ conn slug = do
  let where' = baseWhere <> "AND w.slug = '" <> slug <> "'"
      q = Query {fromQuery = select <> where'}
  records <- query_ conn q :: IO [WorkR]
  case records of
    [] -> pure $ Left "No articles found."
    _ -> pure $ Right $ head $ toEntity records

filterWork_ :: Connection -> Text -> [Text] -> IO [Work]
filterWork_ conn searchWord tags = do
  let where' =
        baseWhere
          <> "AND (w.title LIKE '%"
          <> searchWord
          <> "%' "
          <> "OR w.description LIKE '%"
          <> searchWord
          <> "%' "
          <> "OR a.body LIKE '%"
          <> searchWord
          <> "%') "
          <> "AND t2.name IN ("
          <> foldr (\x acc -> "'" <> x <> "'" <> acc) "" tags
          <> ")"
      q = Query {fromQuery = select <> where'}
  records <- query_ conn q :: IO [WorkR]
  pure $ toEntity records
