{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE StandaloneDeriving #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeSynonymInstances #-}

module Migrations.User (User, UserT (..), UserId, SampleDb (..), sampleDb) where

import Data.Text (Text)
import Database.Beam

data UserT f = User
  { userEmail :: Columnar f Text,
    userFirstName :: Columnar f Text,
    userLastName :: Columnar f Text,
    userPassword :: Columnar f Text
  }
  deriving (Generic, Beamable)

type User = UserT Identity

type UserId = PrimaryKey UserT Identity

data SampleDb f = SampleDb
  {sampleCartUsers :: f (TableEntity UserT)}
  deriving (Generic, Database be)

instance Table UserT where
  data PrimaryKey UserT f = UserId (Columnar f Text) deriving (Generic, Beamable)
  primaryKey = UserId . userEmail

sampleDb :: DatabaseSettings be SampleDb
sampleDb = defaultDbSettings
