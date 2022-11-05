FROM node:12-alpine
WORKDIR /app
ADD package*.json ./
ADD . .
RUN npm install
CMD npm run start