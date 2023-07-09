package main

import (
  "net/http"
  // "database/sql"
  // "github.com/mattn/go-sqlite3"
  "github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()
  r.GET("/blog/aaa", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "pong",
    })
  })
  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
