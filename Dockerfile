
#default
#FROM nginx
#COPY default.conf /etc/nginx/conf.d/
#COPY dist /usr/share/nginx/html


#FROM nginx:1.17.1-alpine
#COPY default.conf /etc/nginx/conf.d/


#FROM nginx:alpine
#COPY . /usr/share/nginx/html
#COPY /dist/pre-registration/index.html /usr/share/nginx/html


FROM node:alpine AS builder
WORKDIR /app
COPY default.conf /etc/nginx/conf.d/
FROM nginx:alpine
COPY /dist/* /usr/share/nginx/html/


#FROM nginx
#COPY default.conf /etc/nginx/conf.d/
#COPY dist/* /usr/share/nginx/html

