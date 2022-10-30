{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}

module Domain.Infrastructures.Beam.PortfolioDB (PortfolioDB (..), portfolioDB) where

import Domain.Infrastructures.Beam.Tables.Article (ArticleT)
import Domain.Infrastructures.Beam.Tables.ArticleCategory (ArticleCategoryT)
import Domain.Infrastructures.Beam.Tables.ArticleComment (ArticleCommentT)
import Domain.Infrastructures.Beam.Tables.ArticleTag (ArticleTagT)
import Domain.Infrastructures.Beam.Tables.Comment (CommentT)
import Domain.Infrastructures.Beam.Tables.Music (MusicT)
import Domain.Infrastructures.Beam.Tables.MusicComment (MusicCommentT)
import Domain.Infrastructures.Beam.Tables.MusicTag (MusicTagT)
import Domain.Infrastructures.Beam.Tables.Photograph (PhotographT)
import Domain.Infrastructures.Beam.Tables.PhotographComment (PhotographCommentT)
import Domain.Infrastructures.Beam.Tables.PhotographTag (PhotographTagT)
import Domain.Infrastructures.Beam.Tables.Tag (TagT)
import Database.Beam
import Database.Beam.Migrate
import Database.Beam.Sqlite

data PortfolioDB f = PortfolioDB
  { portfolioArticles :: f (TableEntity ArticleT),
    portfolioArticleCategories :: f (TableEntity ArticleCategoryT),
    portfolioArticleComments :: f (TableEntity ArticleCommentT),
    portfolioArticleTags :: f (TableEntity ArticleTagT),
    portfolioMusic :: f (TableEntity MusicT),
    portfolioMusicComments :: f (TableEntity MusicCommentT),
    portfolioMusicTags :: f (TableEntity MusicTagT),
    portfolioPhotographs :: f (TableEntity PhotographT),
    portfolioPhotographComments :: f (TableEntity PhotographCommentT),
    portfolioPhotographTags :: f (TableEntity PhotographTagT),
    portfolioTags :: f (TableEntity TagT),
    portfolioComments :: f (TableEntity CommentT)
  }
  deriving (Generic, Database be)

portfolioDB :: CheckedDatabaseSettings Sqlite PortfolioDB
portfolioDB = defaultMigratableDbSettings
