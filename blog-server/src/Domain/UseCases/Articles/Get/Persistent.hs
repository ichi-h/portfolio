module Domain.UseCases.Articles.Get.Persistent
  ( ReadArticleWork,
  )
where

import Domain.Entities.Work (ArticleWork)

type ReadArticleWork = Int -> IO (Either String ArticleWork)
