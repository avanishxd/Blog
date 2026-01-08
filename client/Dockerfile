### Build stage
FROM node:18-slim AS build
WORKDIR /usr/src/app

# Install deps
COPY package.json package-lock.json ./
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
RUN npm ci

# Copy source and build
COPY . .
# React-scripts 4 may need legacy OpenSSL option for newer node; set during build
ENV NODE_OPTIONS=--openssl-legacy-provider
# Use empty base so built bundle makes relative requests by default
ENV REACT_APP_API_BASE_URL=
RUN npm run build

### Production stage: serve built files with nginx
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
