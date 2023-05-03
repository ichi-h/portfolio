FROM node:16.17-bullseye-slim

WORKDIR /var/www/project

COPY ./node/package.json ./node/package-lock.json ./

RUN npm ci
