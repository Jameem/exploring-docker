# SPecify a base image
FROM node:alpine

# Install some dependencies
RUN npm Install

#Default command
CMD [ "npm", "start" ]