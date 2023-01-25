FROM node:14

RUN apt-get update

WORKDIR /app

ENV PORT=3000

COPY ["package.json", "yarn.lock"] .

RUN yarn

COPY . .

CMD ["yarn", "dev"]