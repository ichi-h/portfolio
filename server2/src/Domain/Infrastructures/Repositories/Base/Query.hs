module Domain.Infrastructures.Repositories.Base.Query where

import Domain.Infrastructures.Repositories.Base.Filter (Filter (..))
import Domain.Infrastructures.Repositories.Base.Order (Order)

data Query = Query
  { queryFrom :: String,
    queryFilter :: [Filter],
    queryFilterNull :: [String],
    queryFilterNotNull :: [String],
    queryJoin :: [String],
    queryOrder :: Maybe Order,
    queryLimit :: Maybe Int,
    queryOffset :: Maybe Int
  }

newQuery :: String -> Query
newQuery from =
  Query
    { queryFrom = from,
      queryFilter = [],
      queryFilterNull = [],
      queryFilterNotNull = [],
      queryJoin = [],
      queryOrder = Nothing,
      queryLimit = Nothing,
      queryOffset = Nothing
    }
