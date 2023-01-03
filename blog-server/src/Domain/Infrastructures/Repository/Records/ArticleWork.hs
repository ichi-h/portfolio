module Domain.Infrastructures.Repository.Records.ArticleWork (ArticleWorkR (..), articleWorkRToEntity) where

import Data.Text (Text)
import Data.Time (UTCTime)
import Database.SQLite.Simple
  ( FromRow (..),
    ToRow (..),
  )
import Database.SQLite.Simple.FromRow (field)
import Domain.Entities.Article (Article (..))
import Domain.Entities.Tag (Tag (..))
import Domain.Entities.Work (ArticleWork, Work (..))
import Prelude

data ArticleWorkR = ArticleWorkR
  { articleWorkRId :: Int,
    articleWorkRCategory :: Text,
    articleWorkRSlug :: Text,
    articleWorkRTitle :: Text,
    articleWorkRDescription :: Text,
    articleWorkRThumbnailUrl :: Text,
    articleWorkRCreatedAt :: UTCTime,
    articleWorkRRevisedAt :: UTCTime,
    articleWorkRPublishedAt :: Maybe UTCTime,
    articleWorkRUnpublishedAt :: Maybe UTCTime,
    articleWorkRIsDraft :: Int,
    articleWorkRBody :: Text,
    articleWorkRTagId :: Int,
    articleWorkRTagName :: Text
  }

instance FromRow ArticleWorkR where
  fromRow = ArticleWorkR <$> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field

instance ToRow ArticleWorkR where
  toRow (ArticleWorkR a b c d e f g h i j k l m o) = toRow (a, b, c, d, e, f, g, h, i, j) ++ toRow (k, l, m, o)

articleWorkRToTag :: [ArticleWorkR] -> [Tag]
articleWorkRToTag records = map (\r -> Tag (articleWorkRTagId r) (articleWorkRTagName r)) records

rmDuplication :: [ArticleWorkR] -> [ArticleWorkR]
rmDuplication [] = []
rmDuplication (x : xs) = x : rmDuplication (filter (\y -> articleWorkRId x /= articleWorkRId y) xs)

articleWorkRToEntity :: [ArticleWorkR] -> [ArticleWork]
articleWorkRToEntity records =
  map
    ( \r ->
        Work
          { workId = articleWorkRId r,
            workCategory = articleWorkRCategory r,
            workSlug = articleWorkRSlug r,
            workTitle = articleWorkRTitle r,
            workDescription = articleWorkRDescription r,
            workThumbnailUrl = articleWorkRThumbnailUrl r,
            workCreatedAt = articleWorkRCreatedAt r,
            workRevisedAt = articleWorkRRevisedAt r,
            workPublishedAt = articleWorkRPublishedAt r,
            workUnpublishedAt = articleWorkRUnpublishedAt r,
            workIsDraft = articleWorkRIsDraft r == 1,
            workTags = articleWorkRToTag (filter (\y -> articleWorkRId r == articleWorkRId y) records),
            workContent =
              Article
                { articleId = articleWorkRId r,
                  articleWorkId = articleWorkRId r,
                  articleBody = articleWorkRBody r
                }
          }
    )
    uniques
  where
    uniques = rmDuplication records
