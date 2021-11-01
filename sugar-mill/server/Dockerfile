FROM node:14.15.4 as base

FROM base as development

# Create app directory
WORKDIR /server

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5001

# CMD [ "node", "server.js" ]
CMD npm start