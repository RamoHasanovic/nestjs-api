# Build stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
COPY .env ./
RUN npm install

# Kopiraj sav kod
COPY . .

# Pokreni prisma generate kako bi klijent bio generisan
RUN npx prisma generate

# Production stage
FROM node:20

WORKDIR /app

# Kopiraj sve iz build stejdža
COPY --from=build /app /app

# Ekspoziraj port 3000
EXPOSE 3000

# Pokreni aplikaciju
CMD ["npm", "start"]
