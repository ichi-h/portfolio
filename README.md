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

## build

TODO: Automate this process

```bash
# server
source .env
docker-compose -f docker-compose_prod-build.yaml build

aws configure
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com
docker tag portfolio-db-manager:latest ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-db-manager:latest
docker tag portfolio-works-server:latest ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-works-server:latest

docker-compose -f docker-compose_prod-build.yaml push

# client
cd node
pnpm build
```

## deploy

TODO: Automate this process

```bash
# in production server
source .env
aws configure
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com
docker-compose -f docker-compose_prod.yaml up -d
```
