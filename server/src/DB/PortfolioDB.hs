{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}

module DB.PortfolioDB (PortfolioDB (..), portfolioDB) where

import Database.Beam
import DB.Tables.Article (ArticleT)
import DB.Tables.ArticleCategory (ArticleCategoryT)
import DB.Tables.ArticleComment (ArticleCommentT)
import DB.Tables.ArticleTag (ArticleTagT)
import DB.Tables.Comment (CommentT)
import DB.Tables.Music (MusicT)
import DB.Tables.MusicComment (MusicCommentT)
import DB.Tables.MusicTag (MusicTagT)
import DB.Tables.Photograph (PhotographT)
import DB.Tables.PhotographComment (PhotographCommentT)
import DB.Tables.PhotographTag (PhotographTagT)
import DB.Tables.Tag (TagT)

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
