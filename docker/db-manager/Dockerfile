FROM python:3.11.6-slim-bookworm as db-dev

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
  chmod +x /usr/local/bin/dbmate && \
  python -m pip install --upgrade pip setuptools && \
  pip install sqlite-web python-dotenv

ENTRYPOINT [ "sh", "./entrypoint.sh", "dev" ]

FROM db-dev as db-prod

ENTRYPOINT [ "sh", "./entrypoint.sh", "prod" ]
