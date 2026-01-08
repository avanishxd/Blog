FROM node:18-slim

WORKDIR /usr/src/app

# Install build dependencies for native modules (bcrypt)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential python3 make g++ ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy application source
COPY . .

ENV NODE_ENV=production
EXPOSE 8000

CMD ["node", "index.js"]
