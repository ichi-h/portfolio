{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Works.Get.Execute (executeGetWork) where

import Control.Lens (makeLenses, (^.))
import Data.Text (Text)
import Domain.UseCases.Works.Get.Input (GetWorkInput (..))
import Domain.UseCases.Works.Get.Output (GetWorkOutput, toOutput)

makeLenses ''GetWorkInput

executeGetWork :: GetWorkInput -> IO (Either Text GetWorkOutput)
executeGetWork input = do
  let slug' = input ^. slug
      readWork' = input ^. readWork
  article <- readWork' slug'
  case article of
    Right a -> pure $ Right $ toOutput a
    Left msg -> pure $ Left msg
