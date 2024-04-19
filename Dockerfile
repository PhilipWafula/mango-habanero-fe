# Stage 1: Building the app
FROM node:20.11-alpine AS builder

LABEL maintainer="Mango Habanero <main[at]mango-gabanero.dev>"
LABEL description="Dockerfile for building and running a Next.js application"
LABEL repository="https://github.com/PhilipWafula/mango-habanero-fe"
LABEL homepage="https://mango-habanero.dev"

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Setup the runtime environment
FROM builder

WORKDIR /app
ENV NODE_ENV=production

# Copy built nodes modules and build directories
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
