module Controllers.Works (getAllWorks, getWork, filterWorks) where

import Control.Monad.IO.Class (liftIO)
import Data.Maybe (fromMaybe)
import Data.Text (Text, pack, splitOn)
import qualified Data.Text.Lazy as LazyText (fromStrict)
import Data.Text.Lazy.Encoding (encodeUtf8)
import Domain.Infrastructures.Persistent.Connection (closeDB, connectDB)
import Domain.Infrastructures.Persistent.Queries.Works (filterWork_, readAllWorks_, readWork_)
import Domain.UseCases.Works.Filter.Execute (executeFilterWorks)
import Domain.UseCases.Works.Filter.Input (FilterWorksInput (..))
import Domain.UseCases.Works.Filter.Output (FilterWorksOutput)
import Domain.UseCases.Works.Get.Execute (executeGetWork)
import Domain.UseCases.Works.Get.Input (GetWorkInput (..))
import Domain.UseCases.Works.Get.Output (GetWorkOutput)
import Domain.UseCases.Works.GetAll.Execute (executeGetAllArticle)
import Domain.UseCases.Works.GetAll.Input (GetAllWorksInput (..))
import Domain.UseCases.Works.GetAll.Output (GetAllWorksOutput)
import Servant

getAllWorks :: Handler GetAllWorksOutput
getAllWorks = do
  conn <- liftIO (connectDB)
  let input =
        GetAllWorksInput
          { _readAllWorks = readAllWorks_ conn
          }
  result <- liftIO $ executeGetAllArticle input
  liftIO $ closeDB conn
  pure result

getWork :: Text -> Handler GetWorkOutput
getWork slug = do
  conn <- liftIO (connectDB)
  let input =
        GetWorkInput
          { _slug = slug,
            _readWork = readWork_ conn
          }
  result <- liftIO $ executeGetWork input
  case result of
    Left msg -> throwError $ err404 {errBody = encodeUtf8 $ LazyText.fromStrict msg}
    Right a -> pure a

filterWorks :: Maybe Text -> Maybe Text -> Handler FilterWorksOutput
filterWorks searchWord tags = do
  conn <- liftIO (connectDB)
  let searchWord' = fromMaybe emptyText searchWord
      tags' = fromMaybe emptyText tags
      input =
        FilterWorksInput
          { _searchWord = searchWord',
            _tags = splitCommas tags',
            _filterWorks = filterWork_ conn
          }
  result <- liftIO $ executeFilterWorks input
  liftIO $ closeDB conn
  pure result
  where
    emptyText = pack ""
    splitCommas = splitOn (pack ",")
