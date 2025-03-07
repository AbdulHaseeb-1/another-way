FROM node:latest

WORKDIR /app/backend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD [ "npm","run","dev"]
