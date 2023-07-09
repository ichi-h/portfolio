FROM golang:1.20.5-bullseye as go-dev

WORKDIR /var/www/project

COPY ./go .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  sqlite3=3.* \
  git \
  ca-certificates && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  go mod tidy && \
  go install github.com/cosmtrek/air@latest
