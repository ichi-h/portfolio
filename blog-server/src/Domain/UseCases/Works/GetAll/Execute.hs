module Domain.UseCases.Works.GetAll.Execute
  ( executeGetAllArticle,
  )
where

import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput, toOutput)
import Domain.UseCases.Works.GetAll.Persistent (ReadAllWorks)
import Prelude

executeGetAllArticle :: ReadAllWorks -> IO GetAllWorksOutput
executeGetAllArticle readAllWorks = do
  articles <- readAllWorks
  pure $ toOutput articles
