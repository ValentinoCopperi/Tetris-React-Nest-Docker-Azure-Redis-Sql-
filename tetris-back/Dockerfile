# Imagen base
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar solo archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar el proyecto NestJS
RUN npm run build

# Exponer el puerto de Nest (por defecto 3000)
EXPOSE 3000

# Comando para ejecutar NestJS
CMD ["npm", "run", "start:prod"]
