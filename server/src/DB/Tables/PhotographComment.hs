{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.PhotographComment (PhotographComment, PhotographCommentT (..)) where

import Data.Int (Int32)
import Database.Beam
import DB.Tables.Comment (CommentT)
import DB.Tables.Photograph (PhotographT)

data PhotographCommentT f = PhotographComment
  { photographCommentId :: Columnar f Int32,
    photographCommentPhotographId :: PrimaryKey PhotographT f,
    photographCommentCommentId :: PrimaryKey CommentT f
  }
  deriving (Generic, Beamable)

type PhotographComment = PhotographCommentT Identity

instance Table PhotographCommentT where
  data PrimaryKey PhotographCommentT f = PhotographCommentId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = PhotographCommentId . photographCommentId
