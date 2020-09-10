FROM node:12.18-alpine

ENV NODE_ENV production
ENV PORT=3000

#WORKDIR /usr/src/app
RUN mkdir -p /api
WORKDIR /api
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
# && mv node_modules ../
COPY . .
RUN npm install --global nodemon @babel/core @babel/cli @babel/preset-env
EXPOSE 3000
#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
