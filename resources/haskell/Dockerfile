FROM debian:bullseye-slim as blog-server-dev

WORKDIR /var/www/project

COPY ./haskell/blog-server .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  ca-certificates \
  curl \
  g++ \
  gcc \
  libc6-dev \
  libffi-dev \
  libgmp-dev \
  make \
  xz-utils \
  zlib1g-dev \
  git \
  gnupg \
  netbase \
  sqlite3=3.* && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  curl -sSL https://get.haskellstack.org/ | sh && \
  stack upgrade && \
  stack --version && \
  stack setup && \
  stack install ghcid ormolu && \
  stack build


FROM debian:bullseye-slim as blog-server-prod

COPY --from=blog-server-dev /var/www/project/.stack-work/dist/x86_64-linux/Cabal-3.2.1.0/build/portfolio-exe/portfolio-exe /usr/local/bin/portfolio
