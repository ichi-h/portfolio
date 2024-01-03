FROM mcr.microsoft.com/dotnet/sdk:8.0 AS works-server-dev

WORKDIR /apps

COPY ./fsharp .

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq --no-install-recommends install \
  sqlite3=3.* && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN dotnet restore ./src/WorksServer/WorksServer.fsproj

# ARG TARGETARCH
# WORKDIR /src

# COPY . .
# # RUN dotnet restore "Api/Api.fsproj" -a $TARGETARCH
# RUN dotnet restore "Api/Api.fsproj"

# RUN dotnet publish "Api/Api.fsproj" -o /app/publish
# # RUN dotnet publish "Api/Api.fsproj" -a $TARGETARCH --no-restore -o /app/publish 

# FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine
# WORKDIR /app
# EXPOSE 8080
# COPY --from=build /app/publish .
# ENTRYPOINT [ "dotnet", "Api.dll" ]
