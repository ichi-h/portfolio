{-# LANGUAGE TemplateHaskell #-}

module Domain.Entities.Work (Work (..)) where

import Data.Text
import Data.Time (UTCTime)
import Domain.Entities.Article (Article)
import Domain.Entities.Entity (Entity (..))
import Domain.Entities.Tag (Tag)

data Work = Work
  { _workId :: Int,
    _workCategory :: Text,
    _workSlug :: Text,
    _workTitle :: Text,
    _workDescription :: Text,
    _workThumbnailUrl :: Text,
    _workCreatedAt :: UTCTime,
    _workRevisedAt :: UTCTime,
    _workPublishedAt :: Maybe UTCTime,
    _workUnpublishedAt :: Maybe UTCTime,
    _workTags :: [Tag],
    _workArticle :: Maybe Article
  }
  deriving (Show)

instance Entity Work where
  validate work = Right work -- TODO: implement
