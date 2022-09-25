{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Comment (Comment, CommentT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Data.Time (UTCTime)
import Database.Beam

data CommentT f = Comment
  { commentId :: Columnar f Int32,
    commentName :: Columnar f Text,
    commentEmail :: Columnar f Text,
    commentContent :: Columnar f Text,
    commentToken :: Columnar f Text,
    commentCreatedAt :: Columnar f UTCTime,
    commentUpdatedAt :: Columnar f UTCTime,
    commentPublishedAt :: Columnar f (Maybe UTCTime),
    commentUnpublishedAt :: Columnar f (Maybe UTCTime)
  }
  deriving (Generic, Beamable)

type Comment = CommentT Identity

instance Table CommentT where
  data PrimaryKey CommentT f = CommentId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = CommentId . commentId
