#Friendly Worms Crawl Run Climb Emerge Cheerfully# 

FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
