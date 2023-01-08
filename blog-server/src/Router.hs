{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeOperators #-}

module Router (API, server) where

import Controllers.Articles (getAllArticleWorks, getArticleWork)
import Domain.UseCases.Articles.Get.Output (GetArticleOutput)
import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput)
import Servant

type V1Prefix uri = "api" :> "v1" :> uri

type API =
  V1Prefix ("works" :> "articles" :> Get '[JSON] [GetAllArticlesOutput])
    :<|> V1Prefix ("works" :> "articles" :> Capture "workId" Int :> Get '[JSON] GetArticleOutput)

server :: Server API
server =
  getAllArticleWorks
    :<|> getArticleWork
