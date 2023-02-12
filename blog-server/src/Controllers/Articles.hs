module Controllers.Articles (getAllArticleWorks, getArticleWork) where

import Control.Monad.IO.Class (liftIO)
import Data.Text.Lazy (pack)
import Data.Text.Lazy.Encoding (encodeUtf8)
import Domain.Infrastructures.Persistent.Connection (closeDB, connectDB)
import Domain.Infrastructures.Persistent.Queries.ArticleWorks (readAllArticleWorks_, readArticleWork_)
import Domain.UseCases.Articles.Get.Execute (executeGetArticle)
import Domain.UseCases.Articles.Get.Output (GetArticleOutput)
import Domain.UseCases.Articles.GetAll.Execute (executeGetAllArticle)
import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput)
import Servant

getAllArticleWorks :: Handler [GetAllArticlesOutput]
getAllArticleWorks = do
  conn <- liftIO (connectDB)
  let readAllArticleWorks = readAllArticleWorks_ conn
  result <- liftIO $ executeGetAllArticle readAllArticleWorks
  liftIO $ closeDB conn
  pure result

getArticleWork :: String -> Handler GetArticleOutput
getArticleWork slug = do
  conn <- liftIO (connectDB)
  let readArticleWork = readArticleWork_ conn
  result <- liftIO $ executeGetArticle readArticleWork slug
  case result of
    Left msg -> throwError $ err404 {errBody = encodeUtf8 $ pack msg}
    Right a -> pure a
