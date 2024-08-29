# Use a Node.js image as the base
FROM node:18

# Install PostgreSQL client tools to use pg_isready
RUN apt-get update && apt-get install -y postgresql-client

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json from the context (./server)
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Debug step - check contents of /app/dist
RUN ls -la /app/dist

# Expose the port the backend will run on
EXPOSE 3000

# Copy the wait-for-it.sh script to handle database readiness
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Start the backend server after ensuring the database is ready
CMD ["./wait-for-it.sh", "postgres", "--", "npm", "run", "start:dev"]






## Use a Node.js image as the base
#FROM node:18
#
## Set the working directory inside the container
#WORKDIR /app
#
## Copy the package.json and package-lock.json from the context (./server)
#COPY package*.json ./
#
## Install dependencies
#RUN npm cache clean --force
#RUN npm install
#
## Copy the rest of the application code
#COPY . .
#
## Generate Prisma client
#RUN npx prisma generate
#
## Build the application
#RUN npm run build
#
## Debug step - check contents of /app/dist
#RUN ls -la /app/dist
#
## Expose the port the backend will run on
#EXPOSE 3000
#
## Start the backend server
#CMD ["npm", "run", "start:dev"]






## Use a Node.js image as the base
#FROM node:18
#
## Set the working directory inside the container
#WORKDIR /app
#
## Copy the package.json and package-lock.json from the context (./server)
#COPY package*.json ./
#
## Install dependencies
#RUN npm cache clean --force
#RUN npm install
#
## Copy the rest of the application code
#COPY .. .
#
## Generate Prisma client
#RUN npx prisma generate
#
## Build the application
#RUN #npm run start:dev
#RUN npm run build
#
## Debug step - check contents of /app/dist
#RUN ls -la /app/dist
#
## Expose the port the backend will run on
#EXPOSE 3000
#
## Start the backend server
#CMD ["npm", "run", "start:dev"]
