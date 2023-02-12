{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Migrate (main) where

import Configuration.Dotenv (defaultConfig, loadFile)
import Domain.Infrastructures.Persistent.Connection (closeDB, connectDB)
import Domain.Infrastructures.Persistent.Operators.Migrations (insertMigration_, readAllMigrations_)
import Domain.Infrastructures.Persistent.Operators.RawQuery (runRawQuery_)
import Domain.Infrastructures.Fs.ReadMigrationFile
  ( MigrateOrRollback (Migrate),
    readMigrationFile,
  )
import Domain.UseCases.Migrations.Migrate.Execute (executeMigrate)
import System.Environment (getArgs)

main :: IO ()
main = do
  args <- getArgs
  case args of
    [] -> putStrLn "Enter migration name"
    (target : _) -> do
      _ <- loadFile defaultConfig
      conn <- connectDB
      let insertMigration = insertMigration_ conn
          readAllMigrations = readAllMigrations_ conn
          readMigrateFile = readMigrationFile Migrate
          runRawQuery = runRawQuery_ conn
      result <- executeMigrate target insertMigration readAllMigrations readMigrateFile runRawQuery
      closeDB conn
      case result of
        Left msg -> putStrLn msg
        Right msg -> putStrLn msg
