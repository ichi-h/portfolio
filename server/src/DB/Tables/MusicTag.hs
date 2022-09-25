{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.MusicTag (MusicTag, MusicTagT (..)) where

import DB.Tables.Music (MusicT)
import DB.Tables.Tag (TagT)
import Database.Beam

data MusicTagT f = MusicTag
  { musicTagMusicId :: PrimaryKey MusicT f,
    musicTagTagId :: PrimaryKey TagT f
  }
  deriving (Generic, Beamable)

type MusicTag = MusicTagT Identity

instance Table MusicTagT where
  data PrimaryKey MusicTagT f
    = MusicTagId (PrimaryKey MusicT f) (PrimaryKey TagT f)
    deriving (Generic, Beamable)
  primaryKey =
    MusicTagId
      <$> musicTagMusicId
      <*> musicTagTagId
