FROM node:boron

COPY . /app
WORKDIR /app/

RUN npm i

RUN npm run build

WORKDIR /app/dist/subscriber

ENTRYPOINT ["node", "subscriber.js"]