module Domain.UseCases.Works.Get.Execute (executeGetWork) where

import Data.Text (Text)
import Domain.UseCases.Works.Get.Output (GetWorkOutput, toOutput)
import Domain.UseCases.Works.Get.Persistent (ReadWork)
import Prelude

executeGetWork :: ReadWork -> Text -> IO (Either Text GetWorkOutput)
executeGetWork readWork slug = do
  article <- readWork slug
  case article of
    Right a -> pure $ Right $ toOutput a
    Left msg -> pure $ Left msg
