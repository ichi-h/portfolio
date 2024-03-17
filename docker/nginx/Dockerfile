FROM nginx:1.24

RUN apt-get update && apt-get install -y --no-install-recommends \
  openssl \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY ./nginx/nginx.conf /etc/nginx/
COPY ./nginx/entrypoint.sh /etc/nginx/

ENTRYPOINT ["bash", "/etc/nginx/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
