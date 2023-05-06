module Controllers.Tags (getAllTags) where

import Control.Monad.IO.Class (liftIO)
import Domain.Infrastructures.Persistent.Connection (closeDB, connectDB)
import Domain.Infrastructures.Persistent.Queries.Tags (readAllTags_)
import Domain.UseCases.Tags.GetAll.Execute (executeGetAllTags)
import Domain.UseCases.Tags.GetAll.Input (GetAllTagsInput (..))
import Domain.UseCases.Tags.GetAll.Output (GetAllTagsOutput)
import Servant

getAllTags :: Handler GetAllTagsOutput
getAllTags = do
  conn <- liftIO (connectDB)
  let input =
        GetAllTagsInput
          { _readAllTags = readAllTags_ conn
          }
  result <- liftIO $ executeGetAllTags input
  liftIO $ closeDB conn
  pure result
