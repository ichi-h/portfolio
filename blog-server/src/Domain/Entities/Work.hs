{-# LANGUAGE TemplateHaskell #-}

module Domain.Entities.Work (Work (..), ArticleWork) where

import Data.Text
import Data.Time (UTCTime)
import Domain.Entities.Article (Article)
import Domain.Entities.Tag (Tag)

data Work c = Work
  { _workId :: Int,
    _workCategory :: Text,
    _workSlug :: Text,
    _workTitle :: Text,
    _workDescription :: Text,
    _workThumbnailUrl :: Text,
    _workIsDraft :: Bool,
    _workCreatedAt :: UTCTime,
    _workRevisedAt :: UTCTime,
    _workPublishedAt :: Maybe UTCTime,
    _workUnpublishedAt :: Maybe UTCTime,
    _workTags :: [Tag],
    _workContent :: c
  }

type ArticleWork = Work Article
