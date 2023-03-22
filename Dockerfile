FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm ci --ignore-script
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
