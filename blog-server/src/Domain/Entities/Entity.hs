module Domain.Entities.Entity (Entity, validate) where

class Entity a where
  validate :: a -> Either String a
