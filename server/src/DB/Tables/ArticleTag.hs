{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.ArticleTag (ArticleTag, ArticleTagT (..)) where

import Data.Int (Int32)
import Database.Beam
import DB.Tables.Article (ArticleT)
import DB.Tables.Tag (TagT)

data ArticleTagT f = ArticleTag
  { articleTagId :: Columnar f Int32,
    articleTagArticleId :: PrimaryKey ArticleT f,
    articleTagTagId :: PrimaryKey TagT f
  }
  deriving (Generic, Beamable)

type ArticleTag = ArticleTagT Identity

instance Table ArticleTagT where
  data PrimaryKey ArticleTagT f = ArticleTagId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = ArticleTagId . articleTagId
