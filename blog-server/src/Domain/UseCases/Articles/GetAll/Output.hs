{-# LANGUAGE DeriveGeneric #-}

module Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput, articleWorkToOutput) where

import Data.Aeson
import Data.Text (Text)
import Data.Time (UTCTime)
import Domain.Entities.Article (Article (..))
import Domain.Entities.Tag (Tag (..))
import Domain.Entities.Work (ArticleWork, Work (..))
import GHC.Generics
import Prelude

data TagOutput = TagOutput
  { tagOutputId :: Int,
    tagOutputName :: Text
  }
  deriving (Generic)

instance ToJSON TagOutput

data ArticleOutput = ArticleOutput
  { articleOutputId :: Int,
    articleOutputBody :: Text
  }
  deriving (Generic)

instance ToJSON ArticleOutput

data GetAllArticlesOutput = GetAllArticlesOutput
  { outputId :: Int,
    outputCategory :: Text,
    outputSlug :: Text,
    outputTitle :: Text,
    outputDescription :: Text,
    outputThumbnailUrl :: Text,
    outputIsDraft :: Bool,
    outputCreatedAt :: UTCTime,
    outputRevisedAt :: UTCTime,
    outputPublishedAt :: Maybe UTCTime,
    outputUnpublishedAt :: Maybe UTCTime,
    outputTags :: [TagOutput],
    outputContent :: ArticleOutput
  }
  deriving (Generic)

instance ToJSON GetAllArticlesOutput

tagEntityToOutput :: Tag -> TagOutput
tagEntityToOutput e =
  TagOutput
    { tagOutputId = tagId e,
      tagOutputName = tagName e
    }

articleEntityToOutput :: Article -> ArticleOutput
articleEntityToOutput e =
  ArticleOutput
    { articleOutputId = articleId e,
      articleOutputBody = articleBody e
    }

articleWorkToOutput :: ArticleWork -> GetAllArticlesOutput
articleWorkToOutput e =
  GetAllArticlesOutput
    { outputId = workId e,
      outputCategory = workCategory e,
      outputSlug = workSlug e,
      outputTitle = workTitle e,
      outputDescription = workDescription e,
      outputThumbnailUrl = workThumbnailUrl e,
      outputIsDraft = workIsDraft e,
      outputCreatedAt = workCreatedAt e,
      outputRevisedAt = workRevisedAt e,
      outputPublishedAt = workPublishedAt e,
      outputUnpublishedAt = workUnpublishedAt e,
      outputTags = map (\t -> tagEntityToOutput t) $ workTags e,
      outputContent = articleEntityToOutput $ workContent e
    }
