source .env
git pull

docker-compose -f docker-compose_prod.yaml down
docker-compose -f docker-compose_prod.yaml pull
docker-compose -f docker-compose_prod.yaml up -d

docker image prune -a -f
