module Domain.UseCases.Works.Get.Persistent
  ( ReadWork,
  )
where

import Data.Text (Text)
import Domain.Entities.Work (Work)

type ReadWork = Text -> IO (Either Text Work)
