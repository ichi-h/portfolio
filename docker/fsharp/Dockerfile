FROM mcr.microsoft.com/dotnet/sdk:8.0-bookworm-slim AS works-server-dev

WORKDIR /apps

COPY ./fsharp .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  sqlite3=3.* && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN dotnet restore ./src/WorksServer/WorksServer.fsproj

FROM works-server-dev AS works-server-build

RUN dotnet publish -o ./dist ./src/WorksServer/WorksServer.fsproj

FROM mcr.microsoft.com/dotnet/aspnet:8.0-bookworm-slim AS works-server-prod

WORKDIR /apps

COPY --from=works-server-build /apps/dist/ /apps/
COPY ./fsharp/src/WorksServer/.env ./

EXPOSE 8080

ENTRYPOINT [ "dotnet", "WorksServer.dll" ]
