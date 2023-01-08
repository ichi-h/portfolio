{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}

module Domain.UseCases.Articles.Get.Output (GetArticleOutput, toOutput) where

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

data GetArticleOutput = GetArticleOutput
  { id :: Int,
    category :: Text,
    slug :: Text,
    title :: Text,
    description :: Text,
    body :: Text,
    thumbnailUrl :: Text,
    revisedAt :: UTCTime,
    publishedAt :: Maybe UTCTime,
    tags :: [Text]
  }
  deriving (Generic)

instance ToJSON GetArticleOutput

toOutput :: ArticleWork -> GetArticleOutput
toOutput a =
  GetArticleOutput
    { id = a ^. workId,
      category = a ^. workCategory,
      slug = a ^. workSlug,
      title = a ^. workTitle,
      description = a ^. workDescription,
      body = a ^. workContent ^. articleBody,
      thumbnailUrl = a ^. workThumbnailUrl,
      revisedAt = a ^. workRevisedAt,
      publishedAt = a ^. workPublishedAt,
      tags = map (\t -> t ^. tagName) $ a ^. workTags
    }
