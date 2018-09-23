FROM node:8.11-alpine

COPY package.json package-lock.json /src/
RUN npm install

COPY . /src
WORKDIR /src

CMD ["node", "main.js"]