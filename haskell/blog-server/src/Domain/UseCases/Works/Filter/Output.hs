{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Works.Filter.Output (FilterWorksOutput, toOutput) where

import Control.Lens (makeLenses, (^.))
import Data.Aeson
import Data.Text (Text)
import Data.Time (UTCTime)
import Domain.Entities.Article (Article (..))
import Domain.Entities.Tag (Tag (..))
import Domain.Entities.Work (Work (..))
import GHC.Generics
import Prelude hiding (id)

makeLenses ''Work
makeLenses ''Tag
makeLenses ''Article

data Work' = Work'
  { id :: Int,
    category :: Text,
    slug :: Text,
    title :: Text,
    description :: Text,
    thumbnailUrl :: Text,
    revisedAt :: UTCTime,
    publishedAt :: Maybe UTCTime,
    tags :: [Text]
  }
  deriving (Generic)

instance ToJSON Work'

type FilterWorksOutput = [Work']

toOutput :: [Work] -> FilterWorksOutput
toOutput as =
  map
    ( \a ->
        Work'
          { id = a ^. workId,
            category = a ^. workCategory,
            slug = a ^. workSlug,
            title = a ^. workTitle,
            description = a ^. workDescription,
            thumbnailUrl = a ^. workThumbnailUrl,
            revisedAt = a ^. workRevisedAt,
            publishedAt = a ^. workPublishedAt,
            tags = map (\t -> t ^. tagName) $ a ^. workTags
          }
    )
    as
