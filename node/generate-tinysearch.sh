set -e

sudo rm -rf ./packages/tinysearch-engine ./index.json

node ./scripts/build-index.js

docker run -v $PWD:/app tinysearch/cli --engine-version path=\"/engine\" --path /app/packages/tinysearch-engine /app/index.json

sudo chmod -R 777 ./packages/tinysearch-engine

rm ./packages/tinysearch-engine/.gitignore ./packages/tinysearch-engine/demo.html

pnpm install
