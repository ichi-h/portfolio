module Domain.Infrastructures.Repositories.Base.Filter where

data Operator
  = Equal
  | NotEqual
  | GreaterThan
  | GreaterThanOrEqual
  | LessThan
  | LessThanOrEqual
  | Like

data Filter
  = FilterText String Operator String
  | FilterInteger String Operator Int
  | FilterDouble String Operator Double
  | FilterDate String Operator String

data FilterIn
  = FilterInText String [String]
  | FilterInInteger String [Int]
  | FilterInDouble String [Double]
  | FilterInDate String [String]
