# portfolio

- URL: https://ichi-h.com
- storybook: https://portfolio-ui-40i.pages.dev

## Diagrams

```mermaid
graph LR
    Admin["Admin\n(not yet)"]
    Users[Users]
    Users --> DNS
    Admin --> DNS
    Admin <-- "OAuth" --> IdP
    subgraph "Auth0 (not yet)"
        IdP
    end
    subgraph "Notion"
        NotionDB["Database"]
    end
    subgraph "CloudFlare"
        DNS[DNS, CDN]
        DNS --> OG
        DNS --> WorksClient
        DNS -- "Auth\nrequired" --> AdminClient
        DNS --> NotionServer
        subgraph "Workers"
            NotionServer["Notion"]
            OG[og:image]
            NotionServer <-- "Notion API" --> NotionDB

        end
        subgraph "Pages"
            WorksClient[Works]
            AdminClient["Admin\n(not yet)"]
        end
        subgraph "R2"
            WorksServerDB["Works DB\n(SQLite)"]
        end
    end
    subgraph "AWS"
        ECR --> Instance
        subgraph "Tokyo region"
            subgraph "Lightsail VPC"
                subgraph "Instance"
                    WorksDBManger[Works DB\nmanager container]
                    Proxy[Proxy container]
                    WorksDBVolume[Works DB\nvolume]
                    WorksDBClient[Works DB\nclient container]
                    WorksServer[Works server\ncontainer]
                    Proxy --> WorksServer
                    Proxy -- "Auth\nrequired" --> WorksDBClient
                    DNS ---> Proxy
                    WorksServerDB <-- "Replicate\n(Litestream)" --> WorksDBManger
                    WorksServer <--> WorksDBVolume
                    WorksDBClient <--> WorksDBVolume
                    WorksDBManger <--> WorksDBVolume
                end
            end
        end
    end
```

## Technology Stack

- Container technology
  - Docker
- Main libraries
  - F#
    - Minimal API
  - Node
    - TypeScript
    - Remix (React)
    - vanilla-extract
    - Hono
- Database
  - SQLite
  - dbmate
  - sqlite-web
- Proxy server
  - Nginx
- Cloud services
  - AWS
    - Lightsail
    - ECR
  - Cloudflare
    - Pages & Workers
    - DNS
- CMS
  - Notion
- IDaaS
  - Auth0 (not yet)

## Packages

- db-manager
  - Manage SQLite database in dbmate and sqlite-web.
- fsharp
  - Business logic in F#.
- nginx
  - Reverse proxy server for db-client and fsharp.
- node
  - Presentation layer for each server, design system, UI library, and small API servers.

## Setup

```bash
# TODO: set up .env

docker-compose build --no-cache
pnpm install --frozen-lockfile --prefix node

cd schemas
./codegen.sh {project-name} {language}
```

## develop

```bash
docker-compose up -d
cd node
pnpm dev
```

## deploy

```bash
# in build server
./login.sh
./push-ecr.sh

# client
cd node
pnpm build
pnpm run deploy

# in production server
./login.sh
./deploy.sh
```
