{-# LANGUAGE OverloadedStrings #-}
{-# OPTIONS_GHC -fno-warn-orphans #-}

module Domain.Infrastructures.Repositories.Article.ArticleStatement where

import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
    close,
    execute,
    open,
    query,
  )
import Database.SQLite.Simple.FromRow (field)
import Domain.Entities.ArticleT (ArticleT (..))
import Domain.Infrastructures.Repositories.Base.Query (Query (..))
import Domain.Infrastructures.Repositories.Base.Statement (Statement (..))

instance FromRow ArticleT where
  fromRow = ArticleT <$> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field

instance ToRow ArticleT where
  toRow (ArticleT _id title categoryId thumbnailUrl content createdAt updatedAt publishedAt unpublishedAt) = toRow (_id, title, categoryId, thumbnailUrl, content, createdAt, updatedAt, publishedAt, unpublishedAt)

-- class Entity e => Statement e where
--   create :: (Query q) => q -> IO e
--   read :: (Query q) => q -> IO [e]
--   first :: (Query q) => q -> IO e
--   update :: (Query q) => q -> IO e
--   delete :: (Query q) => q -> IO e

instance Statement ArticleT where
  create e = do
    conn <- open "./db/portfolio.db" -- ここは環境変数化したい
    execute conn "INSERT INTO articles (id, title, category_id, thumbnail_url, content, created_at, updated_at, published_at, unpublished_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)" (ArticleT 1 "hoge" 2 "hoge" "hoge" "2022" "2022" Nothing Nothing)
    close conn
    pure e

  read q =
    bracket
      (open "./db/portfolio.db")
      close
      ( \conn -> do
          rows <- query conn "SELECT * FROM articles" ()
          return rows
      )

  first q =
    bracket
      (open "./db/portfolio.db")
      close
      ( \conn -> do
          rows <- query conn "SELECT * FROM articles LIMIT 1" ()
          return rows
      )

  update q =
    bracket
      (open "./db/portfolio.db")
      close
      ( \conn -> do
          execute conn "UPDATE articles SET title = ?, category_id = ?, thumbnail_url = ?, content = ?, created_at = ?, updated_at = ?, published_at = ?, unpublished_at = ?" q
      )

  delete q =
    bracket
      (open "./db/portfolio.db")
      close
      ( \conn -> do
          execute conn "DELETE FROM articles WHERE id = ?" q
      )
