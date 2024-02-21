# portfolio

## Diagrams

### Architecture

```mermaid
graph LR
    Admin[Admin]
    Users[Users]
    Admin --> DNS
    Users --> DNS
    Admin <-- "OAuth" --> IdP
    subgraph "Auth0"
        IdP
    end
    subgraph "Notion"
        NotionDB["Database"]
    end
    subgraph "CloudFlare"
        DNS[DNS, CDN, WAF]
        DNS --> OG
        DNS --> WorksClient
        DNS -- "Auth\nrequired" --> AdminClient
        subgraph "Workers"
            OG[og:image]
        end
        subgraph "Pages"
            WorksClient[Works]
            AdminClient[Admin]
        end
    end
    subgraph "AWS"
        subgraph "S3"
            WorksServerDB["Works DB\n(SQLite)"]
        end
        subgraph "ECR"
            WorksServerImage["Works server\nimage"]
        end
        subgraph "Tokyo region"
            subgraph "Lightsail VPC"
                WorksServer[Works server\ncontainer]
                DNS ----> WorksServer
                WorksServer <-- "Notion API" --> NotionDB
                WorksServerImage <--> WorksServer
                WorksServer <-- "Replicate\n(Litestream)" --> WorksServerDB
            end
        end
    end
```

## Setup

```bash
# TODO: set up .env

docker-compose build --no-cache
pnpm install --frozen-lockfile --prefix node

cd schemas
./codegen.sh {project-name} {language}
```

## deploy

```bash
# in build server
./login.sh
./push-ecr.sh

# client
cd node
pnpm build

# in production server
./login.sh
./deploy.sh
```
