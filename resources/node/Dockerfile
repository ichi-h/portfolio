FROM node:16.17-bullseye-slim

WORKDIR /var/www/project

COPY ./client/package.json ./client/package-lock.json ./

RUN npm ci
