module Domain.UseCases.Articles.GetAll.Persistent
  ( ReadAllArticleWorks,
  )
where

import Domain.Entities.Work (ArticleWork)

type ReadAllArticleWorks = IO [ArticleWork]
