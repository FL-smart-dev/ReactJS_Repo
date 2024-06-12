# Use an appropriate Node.js version
FROM node:18

# Set the working directory
WORKDIR /usr/src

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json /usr/src/

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . /usr/src

# Expose the desired port
EXPOSE 3000

# Run the application
# CMD ["npm", "start"]