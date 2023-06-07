FROM debian:bullseye-slim

ARG PROTOBUF_VERSION=23.2

WORKDIR /proto

COPY ./proto .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  git \
  gnupg \
  netbase \
  libffi-dev \
  libgmp-dev \
  zlib1g-dev \
  libtinfo-dev \
  build-essential \
  ca-certificates \
  unzip \
  curl && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  curl -L https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protoc-${PROTOBUF_VERSION}-linux-x86_64.zip -o protoc.zip && \
  unzip protoc.zip && \
  mv bin/* /usr/local/bin/ && \
  mv include/* /usr/loc && \

  # for the haskell build
  curl -sSL https://get.haskellstack.org/ | sh && \
  stack upgrade && \
  stack --version && \
  stack setup --resolver lts-18.28 && \
  stack install proto-lens-protoc proto-lens-0.7.1.3 proto-lens-runtime-0.7.0.4

ENV PATH /root/.local/bin:$PATH
