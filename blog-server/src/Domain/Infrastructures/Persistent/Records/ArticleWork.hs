module Domain.Infrastructures.Persistent.Records.ArticleWork (ArticleWorkR, articleWorkRToEntity) where

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
    articleWorkRArticleId :: Int,
    articleWorkRBody :: Text,
    articleWorkRTagId :: Int,
    articleWorkRTagName :: Text
  }

instance FromRow ArticleWorkR where
  fromRow = ArticleWorkR <$> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field <*> field

instance ToRow ArticleWorkR where
  toRow (ArticleWorkR a b c d e f g h i j k l m n) = toRow (a, b, c, d, e, f, g, h, i, j) ++ toRow (k, l, m, n)

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
          { _workId = articleWorkRId r,
            _workCategory = articleWorkRCategory r,
            _workSlug = articleWorkRSlug r,
            _workTitle = articleWorkRTitle r,
            _workDescription = articleWorkRDescription r,
            _workThumbnailUrl = articleWorkRThumbnailUrl r,
            _workCreatedAt = articleWorkRCreatedAt r,
            _workRevisedAt = articleWorkRRevisedAt r,
            _workPublishedAt = articleWorkRPublishedAt r,
            _workUnpublishedAt = articleWorkRUnpublishedAt r,
            _workTags = articleWorkRToTag (filter (\y -> articleWorkRId r == articleWorkRId y) records),
            _workContent =
              Article
                { _articleId = articleWorkRArticleId r,
                  _articleBody = articleWorkRBody r
                }
          }
    )
    uniques
  where
    uniques = rmDuplication records
