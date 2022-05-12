FROM node:14 as base

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

#ENV PORT=8181

#EXPOSE 8181

CMD [ "npm", "start" ]

