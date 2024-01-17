FROM node:20.8.0-alpine

WORKDIR /usr/app

COPY package.json /usr/app
RUN npm install

COPY . /usr/app
RUN npm run build
ENV HOST=0.0.0.0
CMD [ "npx", "serve", "-s", "build", "-l", "3000" ]
