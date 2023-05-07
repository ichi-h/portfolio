{-# LANGUAGE OverloadedStrings #-}

module App (startApp, app) where

import Network.Wai
import Network.Wai.Handler.Warp
import Network.Wai.Middleware.Cors (cors, corsRequestHeaders, simpleCorsResourcePolicy)
import Router (API, server)
import Servant

api :: Proxy API
api = Proxy

app :: Application
app = serve api server

startApp :: IO ()
startApp =
  run 8080 $
    cors (const $ Just policy) $
      app
  where
    policy =
      simpleCorsResourcePolicy
        { corsRequestHeaders = ["content-type"]
        }
