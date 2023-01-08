module Domain.UseCases.Articles.Get.Execute (executeGetArticle) where

import Domain.UseCases.Articles.Get.Output (GetArticleOutput, toOutput)
import Domain.UseCases.Articles.Get.Persistent (ReadArticleWork)
import Prelude

executeGetArticle :: ReadArticleWork -> String -> IO (Either String GetArticleOutput)
executeGetArticle readArticleWork slug = do
  article <- readArticleWork slug
  case article of
    Right a -> pure $ Right $ toOutput a
    Left msg -> pure $ Left msg
