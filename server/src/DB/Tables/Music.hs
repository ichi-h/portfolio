{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Music (Music, MusicT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Database.Beam

data MusicT f = Music
  { musicId :: Columnar f Int32,
    musicUrl :: Columnar f Text,
    musicThumbnailUrl :: Columnar f Text,
    musicTitle :: Columnar f Text,
    musicDescription :: Columnar f Text,
    musicCreatedAt :: Columnar f Text,
    musicUpdatedAt :: Columnar f Text,
    musicPublishedAt :: Columnar f (Maybe Text),
    musicUnpublishedAt :: Columnar f (Maybe Text)
  }
  deriving (Generic, Beamable)

type Music = MusicT Identity

instance Table MusicT where
  data PrimaryKey MusicT f = MusicId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = MusicId . musicId
