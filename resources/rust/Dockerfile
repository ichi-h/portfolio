FROM rust:1.64.0-slim-buster as rust-dev

WORKDIR /var/www/project

COPY ./server .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install sqlite3=3.* wget && \
  # wget https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64.deb && \
  # dpkg -i litestream-v0.3.9-linux-amd64.deb && \
  cargo install cargo-watch

FROM rust-dev as rust-prod

RUN cargo build --release
