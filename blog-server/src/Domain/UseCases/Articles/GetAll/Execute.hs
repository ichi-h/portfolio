module Domain.UseCases.Articles.GetAll.Execute
  ( executeGetAllArticle,
  )
where

import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput, toOutput)
import Domain.UseCases.Articles.GetAll.Persistent (ReadAllArticleWorks)
import Prelude

executeGetAllArticle :: ReadAllArticleWorks -> IO [GetAllArticlesOutput]
executeGetAllArticle readAllArticleWorks = do
  articles <- readAllArticleWorks
  pure $ toOutput articles
