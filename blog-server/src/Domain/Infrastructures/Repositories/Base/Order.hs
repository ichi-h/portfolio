module Domain.Infrastructures.Repositories.Base.Order where

data OrderType = Asc | Desc

type Order = (OrderType, String)
