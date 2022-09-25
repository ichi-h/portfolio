{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TypeFamilies #-}

module Migrations.DB (PortfolioDB (..), portfolioDB) where

import Database.Beam
import Migrations.Article (ArticleT)

data PortfolioDB f = PortfolioDB
  { portfolioArticles :: f (TableEntity ArticleT)
  }
  deriving (Generic, Database be)

portfolioDB :: DatabaseSettings be PortfolioDB
portfolioDB = defaultDbSettings
