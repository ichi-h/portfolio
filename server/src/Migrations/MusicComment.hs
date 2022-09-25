{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Migrations.MusicComment (MusicComment, MusicCommentT (..)) where

import Data.Int (Int32)
import Database.Beam
import Migrations.Comment (CommentT)
import Migrations.Music (MusicT)

data MusicCommentT f = MusicComment
  { musicCommentId :: Columnar f Int32,
    musicCommentMusicId :: PrimaryKey MusicT f,
    musicCommentCommentId :: PrimaryKey CommentT f
  }
  deriving (Generic, Beamable)

type MusicComment = MusicCommentT Identity

instance Table MusicCommentT where
  data PrimaryKey MusicCommentT f = MusicCommentId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = MusicCommentId . musicCommentId
