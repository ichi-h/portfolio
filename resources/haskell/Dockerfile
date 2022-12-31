FROM fpco/stack-build-small:lts-18.28 as blog-server-dev

WORKDIR /var/www/project

COPY ./blog-server .

# sqlite & litestream

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install sqlite3=3.* wget && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  stack install ghcid ormolu && \
  stack build

FROM blog-server-dev as blog-server-prod

RUN wget https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64.deb && \
  dpkg -i litestream-v0.3.9-linux-amd64.deb
