{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Tag (Tag, TagT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Database.Beam

data TagT f = Tag
  { tagId :: Columnar f Int32,
    tagName :: Columnar f Text
  }
  deriving (Generic, Beamable)

type Tag = TagT Identity

instance Table TagT where
  data PrimaryKey TagT f = TagId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = TagId . tagId
