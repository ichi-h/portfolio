{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Music (Music, MusicT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Data.Time (UTCTime)
import Database.Beam

data MusicT f = Music
  { musicId :: Columnar f Int32,
    musicUrl :: Columnar f Text,
    musicThumbnailUrl :: Columnar f Text,
    musicTitle :: Columnar f Text,
    musicDescription :: Columnar f Text,
    musicCreatedAt :: Columnar f UTCTime,
    musicUpdatedAt :: Columnar f UTCTime,
    musicPublishedAt :: Columnar f (Maybe UTCTime),
    musicUnpublishedAt :: Columnar f (Maybe UTCTime)
  }
  deriving (Generic, Beamable)

type Music = MusicT Identity

instance Table MusicT where
  data PrimaryKey MusicT f = MusicId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = MusicId . musicId
