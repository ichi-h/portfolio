FROM debian:bookworm-slim as db-dev

WORKDIR /app

COPY ./db-manager .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  ca-certificates \
  sqlite3=3.* \
  curl \
  wget && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  curl -fsSL -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64 && \
  chmod +x /usr/local/bin/dbmate

ENTRYPOINT [ "sh", "./entrypoint.sh", "dev" ]

FROM db-dev as db-prod

RUN wget https://github.com/benbjohnson/litestream/releases/download/v0.3.13/litestream-v0.3.13-linux-amd64.deb && \
  dpkg -i litestream-v0.3.13-linux-amd64.deb && \
  rm litestream-v0.3.13-linux-amd64.deb

ENTRYPOINT [ "sh", "./entrypoint.sh", "prod" ]
