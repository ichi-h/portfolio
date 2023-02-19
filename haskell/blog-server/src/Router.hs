{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeOperators #-}

module Router (API, server) where

import Controllers.Works (getAllWorks, getWork)
import Domain.UseCases.Works.Get.Output (GetWorkOutput)
import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput)
import Servant

type V1Prefix uri = "api" :> "v1" :> uri

type API =
  V1Prefix ("works" :> Get '[JSON] GetAllWorksOutput)
    :<|> V1Prefix ("works" :> Capture "slug" String :> Get '[JSON] GetWorkOutput)

server :: Server API
server =
  getAllWorks
    :<|> getWork
