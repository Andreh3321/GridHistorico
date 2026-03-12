# Usar uma imagem oficial do Node.js (versão leve alpine)
FROM node:20-alpine

# Criar a diretoria de trabalho dentro do contentor
WORKDIR /usr/src/app

# Copiar os ficheiros de dependências primeiro (otimiza o cache do Docker)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o resto do código do projeto
COPY . .

# Expor o porto que o Express está a utilizar
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["node", "app.js"]