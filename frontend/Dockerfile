# Node base image kullanıyoruz
FROM node:18

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Uygulamanın dinleyeceği portu aç
EXPOSE 3000

# React development server başlat
CMD ["npm", "start"]
