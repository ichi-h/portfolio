module Domain.Entities.Entity (Entity (..)) where

class Entity a where
  validate :: a -> Either String a
