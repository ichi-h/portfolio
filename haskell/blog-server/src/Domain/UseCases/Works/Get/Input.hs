module Domain.UseCases.Works.Get.Input
  ( GetWorkInput (..),
  )
where

import Data.Text (Text)
import Domain.Entities.Work (Work)

type Slug = Text

data GetWorkInput = GetWorkInput
  { _slug :: Slug,
    _readWork :: Slug -> IO (Either Text Work)
  }
