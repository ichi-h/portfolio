{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Comment (Comment, CommentT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Database.Beam

data CommentT f = Comment
  { commentId :: Columnar f Int32,
    commentName :: Columnar f Text,
    commentEmail :: Columnar f Text,
    commentContent :: Columnar f Text,
    commentToken :: Columnar f Text,
    commentCreatedAt :: Columnar f Text,
    commentUpdatedAt :: Columnar f Text,
    commentPublishedAt :: Columnar f (Maybe Text),
    commentUnpublishedAt :: Columnar f (Maybe Text)
  }
  deriving (Generic, Beamable)

type Comment = CommentT Identity

instance Table CommentT where
  data PrimaryKey CommentT f = CommentId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = CommentId . commentId
