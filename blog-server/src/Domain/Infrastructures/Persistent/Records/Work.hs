module Domain.Infrastructures.Persistent.Records.Work (WorkR, workRToEntity) where

import Data.Text (Text)
import Data.Time (UTCTime)
import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)
import Domain.Entities.Article (Article (..))
import Domain.Entities.Tag (Tag (..))
import Domain.Entities.Work (Work (..))
import Prelude hiding (id)

data WorkR = WorkR
  { workRId :: Int,
    workRCategory :: Text,
    workRSlug :: Text,
    workRTitle :: Text,
    workRDescription :: Text,
    workRThumbnailUrl :: Text,
    workRCreatedAt :: UTCTime,
    workRRevisedAt :: UTCTime,
    workRPublishedAt :: Maybe UTCTime,
    workRUnpublishedAt :: Maybe UTCTime,
    workRArticleId :: Maybe Int,
    workRBody :: Maybe Text,
    workRTagId :: Int,
    workRTagName :: Text
  }

data ArticleR = ArticleR (Maybe Int) (Maybe Text)

instance FromRow WorkR where
  fromRow = WorkR <$> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field

instance ToRow WorkR where
  toRow (WorkR a b c d e f g h i j k l m n) = toRow (a, b, c, d, e, f, g, h, i, j) ++ toRow (k, l, m, n)

workRToTag :: [WorkR] -> [Tag]
workRToTag records = map (\r -> Tag (workRTagId r) (workRTagName r)) records

rmDuplication :: [WorkR] -> [WorkR]
rmDuplication [] = []
rmDuplication (x : xs) = x : rmDuplication (filter (\y -> workRId x /= workRId y) xs)

articleRtoEntity :: ArticleR -> Maybe Article
articleRtoEntity (ArticleR (Just id) (Just body)) = Just $ Article id body
articleRtoEntity _ = Nothing

workRToEntity :: [WorkR] -> [Work]
workRToEntity records =
  map
    ( \r ->
        Work
          { _workId = workRId r,
            _workCategory = workRCategory r,
            _workSlug = workRSlug r,
            _workTitle = workRTitle r,
            _workDescription = workRDescription r,
            _workThumbnailUrl = workRThumbnailUrl r,
            _workCreatedAt = workRCreatedAt r,
            _workRevisedAt = workRRevisedAt r,
            _workPublishedAt = workRPublishedAt r,
            _workUnpublishedAt = workRUnpublishedAt r,
            _workTags = workRToTag (filter (\y -> workRId r == workRId y) records),
            _workArticle = articleRtoEntity $ ArticleR (workRArticleId r) (workRBody r)
          }
    )
    uniques
  where
    uniques = rmDuplication records
