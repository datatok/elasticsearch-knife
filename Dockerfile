FROM node:18.11.0-alpine3.16

RUN apk --update add tini curl

USER node

WORKDIR /home/node

COPY --chown=node:node ./dist/            /home/node
COPY --chown=node:node ./node_modules     /home/node/node_modules

ENTRYPOINT ["tini", "--"]

CMD [ "node", "main.js" ]