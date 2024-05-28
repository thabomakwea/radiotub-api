# Use the official Node.js image as the base image
FROM node:18-alpine

# Install curl
RUN apk add --no-cache curl

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app
CMD ["node", "dist/index.js"]
