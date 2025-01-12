# Use the official Node.js image as the base image
FROM node:16-alpine

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
COPY --from=0 /app/dist /usr/share/nginx/html


# Expose the port Nginx is serving on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
