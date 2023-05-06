{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Works.GetAll.Execute
  ( executeGetAllArticle,
  )
where

import Control.Lens (makeLenses, (^.))
import Domain.UseCases.Works.GetAll.Input (GetAllWorksInput)
import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput, toOutput)

makeLenses ''GetAllWorksInput

executeGetAllArticle :: GetAllWorksInput -> IO GetAllWorksOutput
executeGetAllArticle input = do
  let readAllWorks' = input ^. readAllWorks
  articles <- readAllWorks'
  pure $ toOutput articles
