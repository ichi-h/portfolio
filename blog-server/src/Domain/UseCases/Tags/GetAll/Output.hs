{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput, toOutput) where

import Control.Lens (makeLenses, (^.))
import Data.Aeson
import Data.Text (Text)
import Domain.Entities.Tag (Tag (..))
import GHC.Generics
import Prelude hiding (id)

makeLenses ''Tag

data GetAllTagsOutput = GetAllTagsOutput
  { tags :: [Text]
  }
  deriving (Generic)

instance ToJSON GetAllTagsOutput

toOutput :: [Tag] -> GetAllTagsOutput
toOutput entities = GetAllTagsOutput {tags = map (\e -> e ^. tagName) entities}
