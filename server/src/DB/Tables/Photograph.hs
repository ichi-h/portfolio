{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.Photograph (Photograph, PhotographT (..)) where

import Data.Int (Int32)
import Data.Text (Text)
import Database.Beam

data PhotographT f = Photograph
  { photographId :: Columnar f Int32,
    photographUrl :: Columnar f Text,
    photographTitle :: Columnar f Text,
    photographDescription :: Columnar f Text,
    photographCreatedAt :: Columnar f Text,
    photographUpdatedAt :: Columnar f Text,
    photographPublishedAt :: Columnar f (Maybe Text),
    photographUnpublishedAt :: Columnar f (Maybe Text)
  }
  deriving (Generic, Beamable)

type Photograph = PhotographT Identity

instance Table PhotographT where
  data PrimaryKey PhotographT f = PhotographId (Columnar f Int32) deriving (Generic, Beamable)
  primaryKey = PhotographId . photographId
