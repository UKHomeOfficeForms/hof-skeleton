# Docker image link: https://hub.docker.com/layers/library/node/20-alpine3.22/images/sha256-dd75a9e8995e7f9d83f64af16d07c1edbc97139b08246ed8cb7f5ea1d28c726d (uses node v20.19.2)
FROM node:20-alpine3.22@sha256:d3507a213936fe4ef54760a186e113db5188472d9efdf491686bd94580a1c1e8

USER root

# Update packages as a result of Trivvy security vulnerability checks
RUN apk update && apk upgrade --no-cache

# Setup nodejs group & nodejs user
RUN addgroup --system nodejs --gid 998 && \
    adduser --system nodejs --uid 999 --home /app/ && \
    chown -R 999:998 /app/

USER 999

WORKDIR /app

COPY --chown=999:998 . /app

RUN yarn install && \
    yarn run postinstall

HEALTHCHECK --interval=5m --timeout=3s \
 CMD curl --fail http://localhost:8080 || exit 1

CMD ["sh", "/app/run.sh"]


EXPOSE 8080
