module Domain.UseCases.Articles.Get.Execute (executeGetArticle) where

import Domain.UseCases.Articles.Get.Output (GetArticleOutput, toOutput)
import Domain.UseCases.Articles.Get.Persistent (ReadArticleWork)
import Prelude

executeGetArticle :: ReadArticleWork -> Int -> IO (Either String GetArticleOutput)
executeGetArticle readArticleWork workId = do
  article <- readArticleWork workId
  case article of
    Right a -> pure $ Right $ toOutput a
    Left msg -> pure $ Left msg
