{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.ArticleCategory (ArticleCategory, ArticleCategoryT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Database.Beam

data ArticleCategoryT f = ArticleCategory
  { articleCategoryId :: Columnar f Int32,
    articleCategoryName :: Columnar f Text
  }
  deriving (Generic, Beamable)

type ArticleCategory = ArticleCategoryT Identity

instance Table ArticleCategoryT where
  data PrimaryKey ArticleCategoryT f = ArticleCategoryId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = ArticleCategoryId . articleCategoryId
