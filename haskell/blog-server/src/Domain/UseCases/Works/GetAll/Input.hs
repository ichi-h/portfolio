module Domain.UseCases.Works.GetAll.Input (GetAllWorksInput (..)) where

import Domain.Entities.Work (Work)

data GetAllWorksInput = GetAllWorksInput
  { _readAllWorks :: IO [Work]
  }
