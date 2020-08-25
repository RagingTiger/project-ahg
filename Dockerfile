# Base NGINX image (with alpine 3.10)
FROM nginx:1.17.8-alpine

# Get static content
COPY server/ /usr/share/nginx/html/
COPY config/ /etc/nginx/
