{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput, toOutput) where

import Control.Lens (makeLenses, (^.))
import Data.Aeson
import Data.Text (Text)
import Data.Time (UTCTime)
import Domain.Entities.Article (Article (..))
import Domain.Entities.Tag (Tag (..))
import Domain.Entities.Work (ArticleWork, Work (..))
import GHC.Generics
import Prelude hiding (id)

makeLenses ''Work
makeLenses ''Tag
makeLenses ''Article

data GetAllArticlesOutput = GetAllArticlesOutput
  { id :: Int,
    category :: Text,
    slug :: Text,
    title :: Text,
    description :: Text,
    body :: Text,
    thumbnailUrl :: Text,
    isDraft :: Bool,
    createdAt :: UTCTime,
    revisedAt :: UTCTime,
    publishedAt :: Maybe UTCTime,
    unpublishedAt :: Maybe UTCTime,
    tags :: [Text]
  }
  deriving (Generic)

instance ToJSON GetAllArticlesOutput

toOutput :: [ArticleWork] -> [GetAllArticlesOutput]
toOutput as =
  map
    ( \a ->
        GetAllArticlesOutput
          { id = a ^. workId,
            category = a ^. workCategory,
            slug = a ^. workSlug,
            title = a ^. workTitle,
            description = a ^. workDescription,
            body = a ^. workContent ^. articleBody,
            thumbnailUrl = a ^. workThumbnailUrl,
            isDraft = a ^. workIsDraft,
            createdAt = a ^. workCreatedAt,
            revisedAt = a ^. workRevisedAt,
            publishedAt = a ^. workPublishedAt,
            unpublishedAt = a ^. workUnpublishedAt,
            tags = map (\t -> t ^. tagName) $ a ^. workTags
          }
    )
    as
