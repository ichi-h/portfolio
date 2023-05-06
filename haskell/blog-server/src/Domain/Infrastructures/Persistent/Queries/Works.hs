{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Persistent.Queries.Works
  ( readAllWorks_,
    readWork_,
    filterWork_,
  )
where

import Data.Text (Text, intercalate, pack)
import Database.SQLite.Simple (Connection, Query (..), query_)
import Domain.Entities.Work (Work)
import Domain.Infrastructures.Persistent.Records.Work (WorkR, toEntity)

select :: Text
select = pack "SELECT w.*, a.id, a.body, t2.* from works w "

joinTaggings :: Text
joinTaggings = pack "INNER JOIN taggings t1 ON w.id = t1.work_id "

joinTags :: Text
joinTags = pack "INNER JOIN tags t2 ON t1.tag_id = t2.id "

joinArticles :: Text
joinArticles = pack "LEFT JOIN articles a ON w.id = a.work_id "

baseWhere :: Text
baseWhere =
  pack "WHERE w.published_at IS NOT NULL and w.unpublished_at IS NULL "

readAllWorks_ :: Connection -> IO [Work]
readAllWorks_ conn = do
  let q =
        Query
          { fromQuery =
              select
                <> joinTaggings
                <> joinTags
                <> joinArticles
                <> baseWhere
          }
  records <- query_ conn q :: IO [WorkR]
  pure $ toEntity records

readWork_ :: Connection -> Text -> IO (Either Text Work)
readWork_ conn slug = do
  let where' = baseWhere <> "AND w.slug = '" <> slug <> "'"
      q =
        Query
          { fromQuery =
              select
                <> joinTaggings
                <> joinTags
                <> joinArticles
                <> where'
          }
  records <- query_ conn q :: IO [WorkR]
  case records of
    [] -> pure $ Left "No articles found."
    _ -> pure $ Right $ head $ toEntity records

filterWork_ :: Connection -> Text -> [Text] -> IO [Work]
filterWork_ conn searchWord tags = do
  let tagLen = length tags
      searchWordWhere = case searchWord of
        "" -> ""
        _ ->
          "AND (w.title LIKE '%"
            <> searchWord
            <> "%' "
            <> "OR w.description LIKE '%"
            <> searchWord
            <> "%' "
            <> "OR a.body LIKE '%"
            <> searchWord
            <> "%') "
      tagsWhere = case tagLen of
        0 -> ""
        _ ->
          "AND t2.name IN ('"
            <> intercalate "', '" tags
            <> "') "
            <> "GROUP BY w.id "
            <> "HAVING COUNT(DISTINCT t2.name) = "
            <> (pack $ show $ tagLen)
      q =
        Query
          { fromQuery =
              "WITH tmp as ( SELECT w.id FROM works w "
                <> joinTaggings
                <> joinTags
                <> joinArticles
                <> baseWhere
                <> searchWordWhere
                <> tagsWhere
                <> ") "
                <> select
                <> joinTaggings
                <> joinTags
                <> joinArticles
                <> "WHERE w.id IN (SELECT id FROM tmp)"
          }
  records <- query_ conn q :: IO [WorkR]
  pure $ toEntity records
