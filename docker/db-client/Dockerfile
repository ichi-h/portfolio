FROM python:3.11.6-slim-bookworm

WORKDIR /db

RUN python -m pip install --upgrade pip setuptools && \
  pip install sqlite-web python-dotenv

EXPOSE 5432
