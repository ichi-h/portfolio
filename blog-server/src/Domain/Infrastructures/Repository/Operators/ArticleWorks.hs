{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Repository.Operators.ArticleWorks
  ( readAllArticleWorks_,
    readArticleWork_,
  )
where

import Data.Text (pack)
import Database.SQLite.Simple (Connection, Query (..), query_)
import Domain.Entities.Work (ArticleWork)
import Domain.Infrastructures.Repository.Records.ArticleWork (ArticleWorkR, articleWorkRToEntity)

readAllArticleWorks_ :: Connection -> IO [ArticleWork]
readAllArticleWorks_ conn = do
  let select = "SELECT w.*, a.id, a.body, t2.* from works w "
      joinArticles = "INNER JOIN articles a ON w.id = a.work_id "
      joinTaggings = "INNER JOIN taggings t1 ON w.id = t1.work_id "
      joinTags = "INNER JOIN tags t2 ON t1.tag_id = t2.id "
      where' = "WHERE w.published_at IS NOT NULL and w.unpublished_at IS NULL"
      q = Query {fromQuery = pack $ select ++ joinArticles ++ joinTaggings ++ joinTags ++ where'}
  records <- query_ conn q :: IO [ArticleWorkR]
  pure $ articleWorkRToEntity records

readArticleWork_ :: Connection -> Int -> IO (Either String ArticleWork)
readArticleWork_ conn workId = do
  let select = "SELECT w.*, a.id, a.body, t2.* from works w "
      joinArticles = "INNER JOIN articles a ON w.id = a.work_id "
      joinTaggings = "INNER JOIN taggings t1 ON w.id = t1.work_id "
      joinTags = "INNER JOIN tags t2 ON t1.tag_id = t2.id "
      where' = "WHERE w.published_at IS NOT NULL AND w.unpublished_at IS NULL AND w.id = " ++ show workId
      q = Query {fromQuery = pack $ select ++ joinArticles ++ joinTaggings ++ joinTags ++ where'}
  records <- query_ conn q :: IO [ArticleWorkR]
  case records of
    [] -> pure $ Left "No articles found."
    _ -> pure $ Right $ head $ articleWorkRToEntity records
