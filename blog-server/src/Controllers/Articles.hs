module Controllers.Articles (getAllArticleWorks) where

import Control.Monad.IO.Class (liftIO)
import Domain.Infrastructures.Repository.Connection (closeDB, connectDB)
import Domain.Infrastructures.Repository.Operators.ArticleWorks (readAllArticleWorks_)
import Domain.UseCases.Articles.GetAll.Execute (executeGetAllArticle)
import Domain.UseCases.Articles.GetAll.Output (GetAllArticlesOutput)
import Servant (Handler)

getAllArticleWorks :: Handler [GetAllArticlesOutput]
getAllArticleWorks = do
  conn <- liftIO (connectDB)
  let readAllArticleWorks = readAllArticleWorks_ conn
  result <- liftIO $ executeGetAllArticle readAllArticleWorks
  liftIO $ closeDB conn
  pure result
