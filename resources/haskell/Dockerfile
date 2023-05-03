FROM fpco/stack-build-small:lts-18.28 as blog-server-base

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install sqlite3=3.* && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*



FROM blog-server-base as blog-server-dev

WORKDIR /var/www/project

COPY ./haskell/blog-server .

RUN stack install ghcid ormolu && \
  stack build



FROM debian:bullseye-slim as blog-server-prod

COPY --from=blog-server-dev /var/www/project/.stack-work/dist/x86_64-linux/Cabal-3.2.1.0/build/portfolio-exe/portfolio-exe /usr/local/bin/portfolio
