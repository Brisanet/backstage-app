FROM node:20-bullseye-slim

WORKDIR /app

RUN apt-get update && apt-get install -y git && apt-get clean

COPY . .

RUN yarn install

EXPOSE 7007

CMD ["yarn", "start"]