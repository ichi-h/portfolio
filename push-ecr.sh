source ./.env
docker-compose -f docker-compose_prod-build.yaml build
docker tag ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-db-manager:latest ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-db-manager:latest
docker tag ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-db-client:latest ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-db-client:latest
docker tag ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-works-server:latest ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-works-server:latest
docker tag ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-nginx:latest ${AWS_ACCOUNT_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/portfolio-nginx:latest
docker-compose -f docker-compose_prod-build.yaml push
