{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.ArticleComment (ArticleComment, ArticleCommentT (..)) where

import DB.Tables.Article (ArticleT)
import DB.Tables.Comment (CommentT)
import Database.Beam

data ArticleCommentT f = ArticleComment
  { articleCommentArticleId :: PrimaryKey ArticleT f,
    articleCommentCommentId :: PrimaryKey CommentT f
  }
  deriving (Generic, Beamable)

type ArticleComment = ArticleCommentT Identity

instance Table ArticleCommentT where
  data PrimaryKey ArticleCommentT f
    = ArticleCommentId (PrimaryKey ArticleT f) (PrimaryKey CommentT f)
    deriving (Generic, Beamable)
  primaryKey =
    ArticleCommentId
      <$> articleCommentArticleId
      <*> articleCommentCommentId
