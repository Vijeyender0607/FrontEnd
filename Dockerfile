# Use the official Node.js image as the base image
FROM node:16-alpine as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use Nginx to serve the build output
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy your Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# # Copy the SSL certificates
# COPY /path/to/ssl/certificates/fullchain.pem /etc/letsencrypt/live/maxitsolutions.in/fullchain.pem
# COPY /path/to/ssl/certificates/privkey.pem /etc/letsencrypt/live/maxitsolutions.in/privkey.pem

# Expose the ports Nginx is serving on
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
