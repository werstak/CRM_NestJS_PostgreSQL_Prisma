# Use a Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json from the context (./server)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY .. .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose the port the backend will run on
EXPOSE 3000

# Start the backend server
CMD ["npm", "run", "start:prod"]
