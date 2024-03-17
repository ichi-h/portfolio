CRYPTPASS=`openssl passwd -apr1 ${BASIC_AUTH_PASSWORD}`

echo "${BASIC_AUTH_USERNAME}:${CRYPTPASS}" >> /etc/nginx/.htpasswd

/docker-entrypoint.sh

exec "$@"
