module Domain.UseCases.Tags.GetAll.Execute
  ( executeGetAllTags,
  )
where

import Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput, toOutput)
import Domain.UseCases.Tags.GetAll.Persistent (ReadAllTags)
import Prelude

executeGetAllTags :: ReadAllTags -> IO GetAllTagsOutput
executeGetAllTags readAllTags = do
  tags <- readAllTags
  pure $ toOutput tags
