# Use the official Node.js image as the base image
FROM node:16.13.1

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY ../package.json ../yarn.lock ./

# Install project dependencies
RUN yarn install --production

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port on which your application will run (default is 3000)
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
