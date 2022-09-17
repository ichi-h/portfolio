FROM fpco/stack-build-small:lts-19.23

WORKDIR /var/www/project

COPY ./server .

RUN stack upgrade
RUN stack --version

RUN stack setup
RUN stack build
