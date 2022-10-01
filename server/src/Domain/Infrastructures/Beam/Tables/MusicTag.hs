{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Domain.Infrastructures.Beam.Tables.MusicTag (MusicTag, MusicTagT (..)) where

import Domain.Infrastructures.Beam.Tables.Music (MusicT)
import Domain.Infrastructures.Beam.Tables.Tag (TagT)
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
