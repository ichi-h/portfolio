FROM node:18.16-bullseye-slim as node-dev

WORKDIR /var/www/project

COPY ./node .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  sqlite3=3.* \
  git \
  ca-certificates && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  npm install -g pnpm && \
  pnpm install --frozen-lockfile
