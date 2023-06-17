module Main
  ( main
  ) where

import Prelude (($))
import Effect.Console as Console
import HTTPure as HTTPure

router :: HTTPure.Request -> HTTPure.ResponseM
router { path: [ "blog", "works" ] } = HTTPure.ok "Hello, World!"

router _ = HTTPure.notFound

main :: HTTPure.ServerM
main = HTTPure.serve 8080 router $ Console.log "Server now up on port 8080"
