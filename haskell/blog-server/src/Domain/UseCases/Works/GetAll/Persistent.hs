module Domain.UseCases.Works.GetAll.Persistent
  ( ReadAllWorks,
  )
where

import Domain.Entities.Work (Work)

type ReadAllWorks = IO [Work]
