# Usa Alpine como imagem base, garantindo um tamanho mínimo e segurança.
FROM alpine:latest

# 1. Instalar o Nginx e dependências via apk (gerenciador de pacotes do Alpine)
# 2. Limpar o cache do apk para reduzir o tamanho final da imagem
RUN apk --no-cache add nginx \
    && rm -rf /var/cache/apk/*

# Expor a porta padrão do Nginx
EXPOSE 80

# Copiar a configuração padrão do Nginx (opcional, mas boa prática)
COPY nginx.conf /etc/nginx/http.d/default.conf

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]