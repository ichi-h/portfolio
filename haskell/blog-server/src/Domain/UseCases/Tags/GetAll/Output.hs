{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput, toOutput) where

import Control.Lens (makeLenses, (^.))
import Data.Text (Text)
import Domain.Entities.Tag (Tag (..))
import Prelude hiding (id)

makeLenses ''Tag

type GetAllTagsOutput = [Text]

toOutput :: [Tag] -> GetAllTagsOutput
toOutput entities = map (\e -> e ^. tagName) entities
