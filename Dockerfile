# Step 1: Use Node.js base image
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Install http-server globally to serve the built app
RUN npm install -g http-server

# Step 8: Expose the port that http-server will run on
EXPOSE 5000

# Step 9: Start the http-server to serve the built app
# Step 9: Start the http-server to serve the built app
CMD ["http-server", "build", "-p", "5000", "-S", "-C", "/certs/cert.pem", "-K", "/certs/key.pem", "--proxy", "https://localhost:5000?", "--proxy-options.secure", "false"]