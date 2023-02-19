module Domain.UseCases.Works.Get.Persistent
  ( ReadWork,
  )
where

import Domain.Entities.Work (Work)

type ReadWork = String -> IO (Either String Work)
