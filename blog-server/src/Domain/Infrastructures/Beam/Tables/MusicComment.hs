{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Domain.Infrastructures.Beam.Tables.MusicComment (MusicComment, MusicCommentT (..)) where

import Domain.Infrastructures.Beam.Tables.Comment (CommentT)
import Domain.Infrastructures.Beam.Tables.Music (MusicT)
import Database.Beam

data MusicCommentT f = MusicComment
  { musicCommentMusicId :: PrimaryKey MusicT f,
    musicCommentCommentId :: PrimaryKey CommentT f
  }
  deriving (Generic, Beamable)

type MusicComment = MusicCommentT Identity

instance Table MusicCommentT where
  data PrimaryKey MusicCommentT f
    = MusicCommentId (PrimaryKey MusicT f) (PrimaryKey CommentT f)
    deriving (Generic, Beamable)
  primaryKey =
    MusicCommentId
      <$> musicCommentMusicId
      <*> musicCommentCommentId
