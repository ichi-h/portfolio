{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Tags.GetAll.Execute
  ( executeGetAllTags,
  )
where

import Control.Lens (makeLenses, (^.))
import Domain.UseCases.Tags.GetAll.Input (GetAllTagsInput (..))
import Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput, toOutput)

makeLenses ''GetAllTagsInput

executeGetAllTags :: GetAllTagsInput -> IO GetAllTagsOutput
executeGetAllTags input = do
  let readAllTags' = input ^. readAllTags
  tags <- readAllTags'
  pure $ toOutput tags
