{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Works.GetAll.Execute
  ( executeGetAllWorks,
  )
where

import Control.Lens (makeLenses, (^.))
import Domain.UseCases.Works.GetAll.Input (GetAllWorksInput)
import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput, toOutput)

makeLenses ''GetAllWorksInput

executeGetAllWorks :: GetAllWorksInput -> IO GetAllWorksOutput
executeGetAllWorks input = do
  let readAllWorks' = input ^. readAllWorks
  articles <- readAllWorks'
  pure $ toOutput articles
