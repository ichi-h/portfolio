module Domain.UseCases.Works.Get.Execute (executeGetWork) where

import Domain.UseCases.Works.Get.Output (GetWorkOutput, toOutput)
import Domain.UseCases.Works.Get.Persistent (ReadWork)
import Prelude

executeGetWork :: ReadWork -> String -> IO (Either String GetWorkOutput)
executeGetWork readWork slug = do
  article <- readWork slug
  case article of
    Right a -> pure $ Right $ toOutput a
    Left msg -> pure $ Left msg
