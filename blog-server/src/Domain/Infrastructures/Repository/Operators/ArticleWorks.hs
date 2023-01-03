{-# LANGUAGE OverloadedStrings #-}

module Domain.Infrastructures.Repository.Operators.ArticleWorks
  ( readAllArticleWorks_,
  )
where

import Database.SQLite.Simple (Connection, Only (..), query_)
import Domain.Entities.Work (ArticleWork, Work (..))

readAllArticleWorks_ :: Connection -> IO [ArticleWork]
readAllArticleWorks_ conn = undefined
