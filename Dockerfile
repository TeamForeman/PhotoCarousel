FROM node:12.18.3

ENV NODE_ENV=production

WORKDIR /photo-carousel

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

EXPOSE 3003 9042

COPY . .

CMD ["npm", "start"]