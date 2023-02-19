module Domain.UseCases.Tags.GetAll.Persistent
  ( ReadAllTags,
  )
where

import Domain.Entities.Tag (Tag)

type ReadAllTags = IO [Tag]
