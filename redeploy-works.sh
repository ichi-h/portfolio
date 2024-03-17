source ./.env

curl -X POST ${REDEPLOY_WORKS_ENDPOINT} \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic ${REDEPLOY_WORKS_TOKEN}" \
