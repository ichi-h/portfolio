{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Migrations.MusicTag (MusicTag, MusicTagT (..)) where

import Data.Int (Int32)
import Database.Beam
import Migrations.Music (MusicT)
import Migrations.Tag (TagT)

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
