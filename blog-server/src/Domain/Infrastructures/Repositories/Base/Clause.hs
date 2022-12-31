module Domain.Infrastructures.Repositories.Base.Clause where

import Domain.Infrastructures.Repositories.Base.Filter (Filter)
import Domain.Infrastructures.Repositories.Base.Query (Query (..))

filterBy :: Filter -> Query -> Query
filterBy f q = q {queryFilter = f : queryFilter q}

filterNull :: String -> Query -> Query
filterNull f q = q {queryFilterNull = f : queryFilterNull q}

filterNotNull :: String -> Query -> Query
filterNotNull f q = q {queryFilterNotNull = f : queryFilterNotNull q}

limitBy :: Int -> Query -> Query
limitBy l q = q {queryLimit = Just l}

offsetBy :: Int -> Query -> Query
offsetBy o q = q {queryOffset = Just o}

join :: String -> Query -> Query
join j q = q {queryJoin = j : queryJoin q}

-- between :: String -> (a, a) -> q -> q

-- read $ orderBy (Desc, "id") $ filterBy ("name", Equal, "john") $ queryFromUser
