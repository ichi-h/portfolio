module Domain.Entities.Entity (Entity (..)) where

import Data.Text (Text)

class Entity a where
  validate :: a -> Either Text a
