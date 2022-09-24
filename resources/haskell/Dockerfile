FROM fpco/stack-build-small:lts-18.28 as haskell-prod

WORKDIR /var/www/project

COPY ./server .

RUN stack build

FROM haskell-prod as haskell-dev

RUN stack install ghcid ormolu
