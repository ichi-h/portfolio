FROM python:3.11.6-slim-bookworm

WORKDIR /db

RUN python -m pip install --upgrade pip setuptools && \
  pip install sqlite-web python-dotenv

EXPOSE 5432

ENTRYPOINT [ "sqlite_web", "/db/portfolio.sqlite3", "--password", "-H", "0.0.0.0", "-p", "5432", "--url-prefix", "/db" ]
