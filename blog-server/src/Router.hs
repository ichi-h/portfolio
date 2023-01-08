{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeOperators #-}

module Router (API, server) where

import Controllers.Articles (getAllArticleWorks)
import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput)
import Servant

type V1Prefix uri = "api" :> "v1" :> uri

type API = V1Prefix ("works" :> "articles" :> Get '[JSON] [GetAllArticlesOutput])

server :: Server API
server = getAllArticleWorks
