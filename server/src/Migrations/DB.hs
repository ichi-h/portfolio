{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}

module Migrations.DB (PortfolioDB (..), portfolioDB) where

import Database.Beam
import Migrations.Article (ArticleT)
import Migrations.ArticleCategory (ArticleCategoryT)
import Migrations.ArticleComment (ArticleCommentT)
import Migrations.ArticleTag (ArticleTagT)
import Migrations.Comment (CommentT)
import Migrations.Music (MusicT)
import Migrations.MusicComment (MusicCommentT)
import Migrations.MusicTag (MusicTagT)
import Migrations.Photograph (PhotographT)
import Migrations.PhotographComment (PhotographCommentT)
import Migrations.PhotographTag (PhotographTagT)
import Migrations.Tag (TagT)

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

portfolioDB :: DatabaseSettings be PortfolioDB
portfolioDB = defaultDbSettings
