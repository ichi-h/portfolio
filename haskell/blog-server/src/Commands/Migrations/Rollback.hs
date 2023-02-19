{-# LANGUAGE OverloadedStrings #-}

module Commands.Migrations.Rollback (main) where

import Configuration.Dotenv (defaultConfig, loadFile)
import Domain.Infrastructures.Fs.ReadMigrationFile
  ( MigrateOrRollback (Rollback),
    readMigrationFile,
  )
import Domain.Infrastructures.Persistent.Connection (closeDB, connectDB)
import Domain.Infrastructures.Persistent.Queries.Migrations (deleteMigration_, readLatestMigration_)
import Domain.Infrastructures.Persistent.Queries.RawQuery (runRawQuery_)
import Domain.UseCases.Migrations.Rollback.Execute (executeRollback)

main :: IO ()
main = do
  _ <- loadFile defaultConfig
  conn <- connectDB
  let readLatestMigration = readLatestMigration_ conn
      readRollbackFile = readMigrationFile Rollback
      runRawQuery = runRawQuery_ conn
      deleteMigration = deleteMigration_ conn
  result <- executeRollback readLatestMigration readRollbackFile runRawQuery deleteMigration
  closeDB conn
  case result of
    Left msg -> putStrLn msg
    Right msg -> putStrLn msg