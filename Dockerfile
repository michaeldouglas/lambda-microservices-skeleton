#Dockerfile api
FROM node:latest

MAINTAINER Michael Douglas Barbosa Araujo <michaeldouglas010790@gmail.com>

ENV HOME=/lambda/tabmedia

WORKDIR $HOME
COPY . $HOME