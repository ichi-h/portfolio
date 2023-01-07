{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeOperators #-}

module Lib
  ( startApp,
    app,
  )
where

import Control.Monad.IO.Class (liftIO)
import Domain.Infrastructures.Repository.Connection (closeDB, connectDB)
import Domain.Infrastructures.Repository.Operators.ArticleWorks (readAllArticleWorks_)
import Domain.Infrastructures.Repository.Operators.Tags (readAllTags_)
import Domain.UseCases.Articles.GetAll.Execute (executeGetAllArticle)
import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput)
import Domain.UseCases.Tags.GetAll.Execute (executeGetAllTags)
import Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput)
import Network.Wai
import Network.Wai.Handler.Warp
import Servant

type V1Prefix uri = "api" :> "v1" :> uri

type API =
  V1Prefix ("works" :> "articles" :> Get '[JSON] [GetAllArticlesOutput])
    :<|> V1Prefix ("tags" :> Get '[JSON] GetAllTagsOutput)

startApp :: IO ()
startApp = run 8080 app

app :: Application
app = serve api server

api :: Proxy API
api = Proxy

server :: Server API
server =
  getAllArticleWorks
    :<|> getAllTags

getAllArticleWorks :: Handler [GetAllArticlesOutput]
getAllArticleWorks = do
  conn <- liftIO (connectDB)
  let readAllArticleWorks = readAllArticleWorks_ conn
  result <- liftIO $ executeGetAllArticle readAllArticleWorks
  liftIO $ closeDB conn
  pure result

getAllTags :: Handler GetAllTagsOutput
getAllTags = do
  conn <- liftIO (connectDB)
  let readAllTags = readAllTags_ conn
  result <- liftIO $ executeGetAllTags readAllTags
  liftIO $ closeDB conn
  pure result
