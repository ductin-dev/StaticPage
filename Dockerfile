# Stage 1: Compile and Build
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY package*.json ./usr/local/app/
COPY yarn*.lock ./usr/local/app/
COPY ./ /usr/local/app/

# Install all the dependencies
RUN yarn install

# Generate the build of the application
RUN yarn run build

# Expose port 3000 (Default)
EXPOSE 3000
CMD ["yarn", "start"]