{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeOperators #-}

module Router (API, server) where

import Controllers.Tags (getAllTags)
import Controllers.Works (filterWorks, getAllWorks, getWork)
import Data.Text (Text)
import Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput)
import Domain.UseCases.Works.Filter.Output (FilterWorksOutput)
import Domain.UseCases.Works.Get.Output (GetWorkOutput)
import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput)
import Servant

type V1Prefix uri = "blog" :> "v1" :> uri

type API =
  V1Prefix ("works" :> Get '[JSON] GetAllWorksOutput)
    :<|> V1Prefix ("works" :> "filter" :> QueryParam "search_word" Text :> QueryParam "tags" Text :> Get '[JSON] FilterWorksOutput)
    :<|> V1Prefix ("works" :> Capture "slug" Text :> Get '[JSON] GetWorkOutput)
    :<|> V1Prefix ("tags" :> Get '[JSON] GetAllTagsOutput)

server :: Server API
server =
  getAllWorks
    :<|> filterWorks
    :<|> getWork
    :<|> getAllTags
