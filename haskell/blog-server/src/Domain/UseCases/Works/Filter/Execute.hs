{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Works.Filter.Execute
  ( executeFilterWorks,
  )
where

import Control.Lens (makeLenses, (^.))
import Domain.UseCases.Works.Filter.Input (FilterWorksInput)
import Domain.UseCases.Works.Filter.Output (FilterWorksOutput, toOutput)

makeLenses ''FilterWorksInput

executeFilterWorks :: FilterWorksInput -> IO FilterWorksOutput
executeFilterWorks input = do
  let searchWord' = input ^. searchWord
      filterWorks' = input ^. filterWorks
      tags' = input ^. tags
  works <- filterWorks' searchWord' tags'
  pure $ toOutput works
