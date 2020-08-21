FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . .

EXPOSE 8000

CMD ["npm", "start"]
