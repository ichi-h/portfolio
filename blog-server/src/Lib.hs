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
import Data.Aeson
import Domain.Infrastructures.Repository.Connection (closeDB, connectDB)
import Domain.Infrastructures.Repository.Operators.ArticleWorks (readAllArticleWorks_)
import Domain.UseCases.Articles.GetAll.Execute (executeGetAllArticle)
import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput)
import GHC.Generics
import Network.Wai
import Network.Wai.Handler.Warp
import Servant

data User = User
  { userId :: Int,
    userFirstName :: String,
    userLastName :: String
  }
  deriving (Generic)

instance ToJSON User

type V1Prefix uri = "api" :> "v1" :> uri

type API =
  V1Prefix ("users" :> Get '[JSON] [User])
    :<|> V1Prefix ("works" :> "articles" :> Get '[JSON] [GetAllArticlesOutput])

startApp :: IO ()
startApp = run 8080 app

app :: Application
app = serve api server

api :: Proxy API
api = Proxy

server :: Server API
server =
  return users
    :<|> getAllArticleWorks

users :: [User]
users =
  [ User 1 "Isaac" "Newton",
    User 2 "Albert" "Einstein"
  ]

getAllArticleWorks :: Handler [GetAllArticlesOutput]
getAllArticleWorks = do
  conn <- liftIO (connectDB)
  let readAllArticleWorks = readAllArticleWorks_ conn
  result <- liftIO $ executeGetAllArticle readAllArticleWorks
  liftIO $ closeDB conn
  pure result
