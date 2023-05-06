module Domain.UseCases.Tags.GetAll.Input (GetAllTagsInput (..)) where

import Domain.Entities.Tag (Tag)

data GetAllTagsInput = GetAllTagsInput
  { _readAllTags :: IO [Tag]
  }
