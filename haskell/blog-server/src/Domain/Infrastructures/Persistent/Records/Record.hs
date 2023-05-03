{-# LANGUAGE MultiParamTypeClasses #-}

module Domain.Infrastructures.Persistent.Records.Record (Record (..)) where

import Domain.Entities.Entity (Entity)

class Entity e => Record a e where
  toEntity :: [a] -> [e]
