{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE FunctionalDependencies #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Works.Get.Output (GetWorkOutput, toOutput) where

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

data Article' = Article'
  { body :: Text
  }
  deriving (Generic)

instance ToJSON Article'

data GetWorkOutput = GetWorkOutput
  { id :: Int,
    category :: Text,
    slug :: Text,
    title :: Text,
    description :: Text,
    thumbnailUrl :: Text,
    revisedAt :: UTCTime,
    publishedAt :: Maybe UTCTime,
    tags :: [Text],
    article :: Maybe Article'
  }
  deriving (Generic)

instance ToJSON GetWorkOutput

toArticle :: Maybe Article -> Maybe Article'
toArticle a = case a of
  Just x -> Just $ Article' {body = x ^. articleBody}
  Nothing -> Nothing

toOutput :: Work -> GetWorkOutput
toOutput w =
  GetWorkOutput
    { id = w ^. workId,
      category = w ^. workCategory,
      slug = w ^. workSlug,
      title = w ^. workTitle,
      description = w ^. workDescription,
      thumbnailUrl = w ^. workThumbnailUrl,
      revisedAt = w ^. workRevisedAt,
      publishedAt = w ^. workPublishedAt,
      tags = map (\t -> t ^. tagName) $ w ^. workTags,
      article = toArticle $ w ^. workArticle
    }
