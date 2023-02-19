FROM fpco/stack-build-small:lts-18.28 as blog-server-dev

WORKDIR /var/www/project

COPY ./haskell/blog-server .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install sqlite3=3.* && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  stack install ghcid ormolu && \
  stack build



FROM ubuntu:18.04 as blog-server-prod

WORKDIR /var/www/project

COPY ./haskell/blog-server .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install sqlite3=3.* wget && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# RUN wget https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64.deb && \
#   dpkg -i litestream-v0.3.9-linux-amd64.deb

COPY --from=blog-server-dev /var/www/project/.stack-work/dist/x86_64-linux/Cabal-3.2.1.0/build/portfolio-exe/portfolio-exe /usr/local/bin/portfolio
