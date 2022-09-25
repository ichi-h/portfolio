{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.MusicTag (MusicTag, MusicTagT (..)) where

import Data.Int (Int32)
import Database.Beam
import DB.Tables.Music (MusicT)
import DB.Tables.Tag (TagT)

data MusicTagT f = MusicTag
  { musicTagId :: Columnar f Int32,
    musicTagMusicId :: PrimaryKey MusicT f,
    musicTagTagId :: PrimaryKey TagT f
  }
  deriving (Generic, Beamable)

type MusicTag = MusicTagT Identity

instance Table MusicTagT where
  data PrimaryKey MusicTagT f = MusicTagId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = MusicTagId . musicTagId
