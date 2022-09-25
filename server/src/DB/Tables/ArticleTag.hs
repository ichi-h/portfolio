{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.ArticleTag (ArticleTag, ArticleTagT (..)) where

import DB.Tables.Article (ArticleT)
import DB.Tables.Tag (TagT)
import Database.Beam

data ArticleTagT f = ArticleTag
  { articleTagArticleId :: PrimaryKey ArticleT f,
    articleTagTagId :: PrimaryKey TagT f
  }
  deriving (Generic, Beamable)

type ArticleTag = ArticleTagT Identity

instance Table ArticleTagT where
  data PrimaryKey ArticleTagT f
    = ArticleTagId (PrimaryKey ArticleT f) (PrimaryKey TagT f)
    deriving (Generic, Beamable)
  primaryKey =
    ArticleTagId
      <$> articleTagArticleId
      <*> articleTagTagId
