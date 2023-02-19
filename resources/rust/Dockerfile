FROM rust:1.67.1-bullseye as ogp-server-dev

WORKDIR /var/www/project

COPY ./rust/ogp_server .

RUN cargo install cargo-watch

FROM ogp-server-dev as ogp-server-build

RUN cargo build --release

FROM debian:bullseye-slim as ogp-server-prod

COPY --from=ogp-server-build /var/www/project/target/release/ogp-server /usr/local/bin/ogp-server
