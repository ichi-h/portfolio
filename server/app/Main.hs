module Main (main) where

import Control.Concurrent
import Lib

main :: IO ()
main = do
  someFunc
  threadDelay 10000000
  main
