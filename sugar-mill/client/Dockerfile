FROM node:14.15.4 as base

FROM base as development

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

EXPOSE 8080

CMD ./startup.sh