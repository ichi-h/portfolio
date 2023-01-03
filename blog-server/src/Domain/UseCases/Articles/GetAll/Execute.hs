module Domain.UseCases.Articles.GetAll.Execute
  ( executeGetAllArticle,
  )
where

import Domain.Entities.Work (ArticleWork)
import Domain.UseCases.Articles.GetAll.Persistent (ReadAllArticleWorks)

executeGetAllArticle :: ReadAllArticleWorks -> IO [ArticleWork]
executeGetAllArticle readAllArticleWorks = do
  articles <- readAllArticleWorks
  pure articles
