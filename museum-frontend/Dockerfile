# Stage 1: Build the Angular application
FROM node:24 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install --frozen-lockfile

COPY . .

# Build the production version of the app using yarn
RUN yarn build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the builder stage to the Nginx html directory
COPY --from=builder /app/dist/first-app/browser /usr/share/nginx/html

# Expose port 80, the default HTTP port Nginx listens on
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
