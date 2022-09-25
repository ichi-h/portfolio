{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE StandaloneDeriving #-}
{-# LANGUAGE TypeFamilies #-}

module DB.Migrate (initialSetup, initialSetupStep) where

import DB.PortfolioDB (PortfolioDB)
import DB.Tables.Article (ArticleT (..))
import DB.Tables.ArticleCategory (ArticleCategoryT (..))
import DB.Tables.ArticleComment (ArticleCommentT (..))
import DB.Tables.ArticleTag (ArticleTagT (..))
import DB.Tables.Comment (CommentT (..))
import DB.Tables.Music (MusicT (..))
import DB.Tables.MusicComment (MusicCommentT (..))
import DB.Tables.MusicTag (MusicTagT (..))
import DB.Tables.Photograph (PhotographT (..))
import DB.Tables.PhotographComment (PhotographCommentT (..))
import DB.Tables.PhotographTag (PhotographTagT (..))
import DB.Tables.Tag (TagT (..))
import Database.Beam.Migrate
import Database.Beam.Query.DataTypes
import Database.Beam.Sqlite

initialSetup ::
  Migration
    Sqlite
    (CheckedDatabaseSettings Sqlite PortfolioDB)
initialSetup =
  PortfolioDB
    <$> ( createTable "article" $
            Article
              { articleId =
                  field
                    "id"
                    int
                    notNull
                    unique,
                articleTitle =
                  field
                    "title"
                    (varchar (Just 255))
                    notNull,
                articleForCategory =
                  ArticleCategoryId (field "category_id" int notNull),
                articleThumbnailUrl =
                  field
                    "thumbnail_url"
                    (varchar (Just 255))
                    notNull,
                articleContent =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                articleCreatedAt =
                  field
                    "created_at"
                    (varchar (Just 63))
                    notNull,
                articleUpdatedAt =
                  field
                    "updated_at"
                    (varchar (Just 63)),
                articlePublishedAt =
                  field
                    "published_at"
                    (maybeType $ varchar (Just 63)),
                articleUnpublishedAt =
                  field
                    "unpublished_at"
                    (maybeType $ varchar (Just 63))
              }
        )
    <*> ( createTable "article_categories" $
            ArticleCategory
              { articleCategoryId =
                  field
                    "id"
                    int
                    notNull
                    unique,
                articleCategoryName =
                  field
                    "thumbnail_url"
                    (varchar (Just 255))
                    notNull
              }
        )
    <*> ( createTable "article_comment" $
            ArticleComment
              { articleCommentArticleId =
                  ArticleId $
                    field
                      "article_id"
                      int
                      notNull,
                articleCommentCommentId =
                  CommentId $
                    field
                      "comment_id"
                      int
                      notNull
              }
        )
    <*> ( createTable "article_tag" $
            ArticleTag
              { articleTagArticleId =
                  field
                    "article_id"
                    int
                    notNull,
                articleTagTagId =
                  field
                    "tag_id"
                    int
                    notNull
              }
        )
    <*> ( createTable "music" $
            Music
              { musicId =
                  field
                    "id"
                    int
                    notNull
                    unique,
                musicUrl =
                  field
                    "url"
                    (varchar (Just 255))
                    notNull,
                musicThumbnailUrl =
                  field
                    "thumbnail_url"
                    (varchar (Just 255))
                    notNull,
                musicTitle =
                  field
                    "title"
                    (varchar (Just 255))
                    notNull,
                musicDescription =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                musicCreatedAt =
                  field
                    "created_at"
                    (varchar (Just 63))
                    notNull,
                musicUpdatedAt =
                  field
                    "updated_at"
                    (varchar (Just 63)),
                musicPublishedAt =
                  field
                    "published_at"
                    (maybeType $ varchar (Just 63)),
                musicUnpublishedAt =
                  field
                    "unpublished_at"
                    (maybeType $ varchar (Just 63))
              }
        )
    <*> ( createTable "music_comment" $
            MusicComment
              { musicCommentMusicId =
                  MusicId $
                    field
                      "music_id"
                      int
                      notNull,
                musicCommentCommentId =
                  CommentId $
                    field
                      "comment_id"
                      int
                      notNull
              }
        )
    <*> ( createTable "music_tag" $
            MusicTag
              { musicTagMusicId =
                  MusicId $
                    field
                      "music_id"
                      int
                      notNull,
                musicTagTagId =
                  TagId $
                    field
                      "tag_id"
                      int
                      notNull
              }
        )
    <*> ( createTable "photograph" $
            Photograph
              { photographId =
                  field
                    "id"
                    int
                    notNull
                    unique,
                photographUrl =
                  field
                    "url"
                    (varchar (Just 255))
                    notNull,
                photographTitle =
                  field
                    "title"
                    (varchar (Just 255))
                    notNull,
                photographDescription =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                photographCreatedAt =
                  field
                    "created_at"
                    (varchar (Just 63))
                    notNull,
                photographUpdatedAt =
                  field
                    "updated_at"
                    (varchar (Just 63))
                    notNull,
                photographPublishedAt =
                  field
                    "published_at"
                    (maybeType $ varchar (Just 63)),
                photographUnpublishedAt =
                  field
                    "unpublished_at"
                    (maybeType $ varchar (Just 63))
              }
        )
    <*> ( createTable "photograph_comment" $
            PhotographComment
              { photographCommentPhotographId =
                  PhotographId $
                    field
                      "photograph_id"
                      int
                      notNull,
                photographCommentCommentId =
                  CommentId $
                    field
                      "comment_id"
                      int
                      notNull
              }
        )
    <*> ( createTable "photograph_tag" $
            PhotographTag
              { photographTagPhotographId =
                  PhotographId $
                    field
                      "photograph_id"
                      int
                      notNull,
                photographTagTagId =
                  TagId $
                    field
                      "tag_id"
                      int
                      notNull
              }
        )
    <*> ( createTable "tag" $
            Tag
              { tagId =
                  field
                    "id"
                    int
                    notNull
                    unique,
                tagName =
                  field
                    "name"
                    (varchar (Just 255))
                    notNull
              }
        )
    <*> ( createTable "comment" $
            Comment
              { commentId =
                  field
                    "id"
                    int
                    notNull
                    unique,
                commentName =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                commentEmail =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                commentContent =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                commentToken =
                  field
                    "content"
                    (varchar (Just 255))
                    notNull,
                commentCreatedAt =
                  field
                    "created_at"
                    (varchar (Just 63))
                    notNull,
                commentUpdatedAt =
                  field
                    "updated_at"
                    (varchar (Just 63))
                    notNull,
                commentPublishedAt =
                  field
                    "published_at"
                    (maybeType $ varchar (Just 63)),
                commentUnpublishedAt =
                  field
                    "unpublished_at"
                    (maybeType $ varchar (Just 63))
              }
        )

initialSetupStep ::
  MigrationSteps
    Sqlite
    ()
    (CheckedDatabaseSettings Sqlite PortfolioDB)
initialSetupStep =
  migrationStep
    "initial_setup"
    (const initialSetup)
