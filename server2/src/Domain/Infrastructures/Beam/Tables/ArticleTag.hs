{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Domain.Infrastructures.Beam.Tables.ArticleTag (ArticleTag, ArticleTagT (..)) where

import Domain.Infrastructures.Beam.Tables.Article (ArticleT)
import Domain.Infrastructures.Beam.Tables.Tag (TagT)
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
