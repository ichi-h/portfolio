module Domain.UseCases.Works.Filter.Input (FilterWorksInput (..)) where

import Data.Text (Text)
import Domain.Entities.Work (Work)

type SearchWord = Text

type TagName = Text

data FilterWorksInput = FilterWorksInput
  { _searchWord :: SearchWord,
    _tags :: [TagName],
    _filterWorks :: SearchWord -> [TagName] -> IO [Work]
  }
