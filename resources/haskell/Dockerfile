FROM fpco/stack-build-small:lts-18.28 as haskell-prod

WORKDIR /var/www/project

COPY ./server .

# sqlite & litestream

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install sqlite3=3.* wget && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  # wget https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64.deb && \
  # dpkg -i litestream-v0.3.9-linux-amd64.deb
  stack build

FROM haskell-prod as haskell-dev

RUN stack install ghcid ormolu
