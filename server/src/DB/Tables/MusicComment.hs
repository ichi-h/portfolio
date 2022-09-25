{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.MusicComment (MusicComment, MusicCommentT (..)) where

import DB.Tables.Comment (CommentT)
import DB.Tables.Music (MusicT)
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
