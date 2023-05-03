FROM node:16.19-bullseye-slim

WORKDIR /var/www/project

COPY ./node ./

RUN npm install -g pnpm && pnpm install
