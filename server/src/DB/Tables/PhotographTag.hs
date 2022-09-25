{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module DB.Tables.PhotographTag (PhotographTag, PhotographTagT (..)) where

import DB.Tables.Photograph (PhotographT)
import DB.Tables.Tag (TagT)
import Database.Beam

data PhotographTagT f = PhotographTag
  { photographTagPhotographId :: PrimaryKey PhotographT f,
    photographTagTagId :: PrimaryKey TagT f
  }
  deriving (Generic, Beamable)

type PhotographTag = PhotographTagT Identity

instance Table PhotographTagT where
  data PrimaryKey PhotographTagT f
    = PhotographTagId (PrimaryKey PhotographT f) (PrimaryKey TagT f)
    deriving (Generic, Beamable)
  primaryKey =
    PhotographTagId
      <$> photographTagPhotographId
      <*> photographTagTagId
