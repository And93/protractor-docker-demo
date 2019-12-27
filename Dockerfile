FROM node:10.16.0

ENV NPM_CONFIG_UNSAFE_PERM true \
    NPM_CONFIG_LOGLEVEL warn

COPY / ./workdir/
WORKDIR workdir
RUN npm i
