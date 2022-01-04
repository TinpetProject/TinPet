# Stage 1: Set up env
FROM node:14.18.1-alpine AS build-step

RUN mkdir /app

WORKDIR /app

COPY package*.json /app

ADD .env.txt /app/.env

RUN npm install

COPY . /app

# RUN npm start
CMD ["npm", "start"]

# # Stage 2: Run app with nginx
# FROM nginx:1.17.1-alpine

# COPY --from=build-step /app/build /usr/share/nginx/html