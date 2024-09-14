# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run Prisma migrations and generate clients for each schema
RUN npx prisma generate --schema=./prisma/radio.prisma
RUN npx prisma generate --schema=./prisma/podcasts.prisma
RUN npx prisma generate --schema=./prisma/playlists.prisma

# Run Prisma migrations to apply database schema for each project
RUN npx prisma migrate deploy --schema=./prisma/radio.prisma
RUN npx prisma migrate deploy --schema=./prisma/podcasts.prisma
RUN npx prisma migrate deploy --schema=./prisma/playlists.prisma

# Build your application (if you're using TypeScript)
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]



# # Use the official Node.js image as the base image
# FROM node:18-alpine

# # Install curl
# RUN apk add --no-cache curl

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the package.json and package-lock.json files
# COPY package*.json ./

# # Install the dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Generate Prisma client
# RUN npx prisma generate

# # Build the TypeScript code
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3001

# # Command to run the app
# CMD ["node", "dist/index.js"]
