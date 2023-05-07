FROM python:3.11.3-slim-bullseye as db-dev

WORKDIR /db

COPY ./db-manager .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  ca-certificates \
  sqlite3=3.* \
  curl \
  wget && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  curl -fsSL -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64 && \
  chmod +x /usr/local/bin/dbmate && \
  dbmate create && \
  dbmate migrate

FROM db-dev as db-prod

RUN wget https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64.deb && \
  dpkg -i litestream-v0.3.9-linux-amd64.deb
