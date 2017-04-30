FROM nginx:alpine

COPY dist /usr/share/nginx/material2-demo
COPY nginx.conf /etc/nginx/conf.d/default.conf
