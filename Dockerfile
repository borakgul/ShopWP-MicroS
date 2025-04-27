FROM node:18
WORKDIR /app

COPY ./package*.json ./backend/
WORKDIR /app/backend
RUN npm install

COPY ./backend ./  

EXPOSE 5000
CMD ["npm", "run", "server"]
