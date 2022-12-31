module Domain.Infrastructures.Repositories.Base.Statement where

import Domain.Entities.Entity (Entity)
import Domain.Infrastructures.Repositories.Base.Query (Query)

class Entity e => Statement e where
  create :: e -> IO e
  read :: Query -> IO [e]
  first :: Query -> IO e
  update :: Query -> IO e
  delete :: Query -> IO e
