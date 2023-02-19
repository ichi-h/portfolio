module Controllers.Works (getAllWorks, getWork) where

import Control.Monad.IO.Class (liftIO)
import Data.Text.Lazy (pack)
import Data.Text.Lazy.Encoding (encodeUtf8)
import Domain.Infrastructures.Persistent.Connection (closeDB, connectDB)
import Domain.Infrastructures.Persistent.Queries.Works (readAllWorks_, readWork_)
import Domain.UseCases.Works.Get.Execute (executeGetWork)
import Domain.UseCases.Works.Get.Output (GetWorkOutput)
import Domain.UseCases.Works.GetAll.Execute (executeGetAllArticle)
import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput)
import Servant

getAllWorks :: Handler GetAllWorksOutput
getAllWorks = do
  conn <- liftIO (connectDB)
  let readAllWorks = readAllWorks_ conn
  result <- liftIO $ executeGetAllArticle readAllWorks
  liftIO $ closeDB conn
  pure result

getWork :: String -> Handler GetWorkOutput
getWork slug = do
  conn <- liftIO (connectDB)
  let readWork = readWork_ conn
  result <- liftIO $ executeGetWork readWork slug
  case result of
    Left msg -> throwError $ err404 {errBody = encodeUtf8 $ pack msg}
    Right a -> pure a
