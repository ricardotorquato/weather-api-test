FROM node:8

WORKDIR /app

RUN npm install -g mocha

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]