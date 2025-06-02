
FROM node:20

ARG DATABASE_URL
ARG RAILWAY_SERVICE_NAME
# Use the varible
RUN echo $RAILWAY_SERVICE_NAME

RUN echo $DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY prisma ./prisma

# Install the application dependencies
RUN yarn install

RUN yarn prisma generate

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN yarn build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "run", "start:prod"]