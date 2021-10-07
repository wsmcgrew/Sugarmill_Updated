FROM node:10-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .
 
EXPOSE 5001

# CMD ./startup.sh-
CMD [ "node", "api.js" ]
