***

# 💾 Nome do Projeto: Gerenciador de Dados JSON

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Online-brightgreen.svg)]()
[![Docker Ready](https://img.shields.io/badge/Docker-Ready-blue.svg)]()

---

## ✨ Visão Geral do Projeto

O **Gerenciador de Dados JSON** é uma aplicação web desenvolvida para facilitar a criação,
manipulação e persistência de conjuntos de dados estruturados em formato JSON. Ele encapsula toda a lógica de
negócio em um *backend* eficiente e expõe uma interface de usuário intuitiva e moderna.

O projeto foi desenhado com foco em escalabilidade e portabilidade, utilizando **Docker** para containerizar
todo o ambiente, garantindo que a execução seja consistente em qualquer máquina.

### 🚀 Principais Funcionalidades

* **Manipulação de JSON:** Capacidade de visualizar, editar e estruturar dados JSON de forma segura através
da interface.
* **Persistência de Dados:** Persiste os dados em um *backend* dedicado, simulando um sistema de banco de
dados.
* **Frontend Interativo:** Interface de usuário responsiva e construída com tecnologias modernas para uma
experiência de usuário superior.
* **Arquitetura Containerizada:** Uso de Docker Compose para orquestração de todos os serviços (Servidor Web,
Backend, etc.), simplificando o *deploy*.
* **Web Server:** Utiliza Nginx como *reverse proxy* para rotear o tráfego web de forma eficiente para o
serviço de backend correto.

---

## ⚙️ Arquitetura Técnica (Tech Stack)

Este projeto adota uma arquitetura em uma camada executando somente comandos em Javasscript.

---

## 🚀 Como Executar o Projeto (Deploy)

Graças ao Docker Compose, o setup é reduzido a um único comando.

### Pré-requisitos
* Docker Desktop (ou Docker Engine) instalado e rodando na sua máquina.

### 1. Clonar o Repositório
```bash
git clone https://github.com/MarlindoMaciel/jsformulario.git
cd jsformulario
```

### 2. Executar com Docker Compose
Este comando constrói as imagens Docker necessárias e inicia todos os serviços em segundo plano.
```bash
docker-compose up --build -d
```
*(`--build` força a reconstrução das imagens; `-d` executa em *detached mode*.)*

### 3. Acessando a Aplicação
Após alguns minutos de inicialização (especialmente na primeira execução), a aplicação estará acessível em
seu navegador:

➡️ **[http://localhost:8080](http://localhost:8080)**

---

## 📚 Estrutura de Arquivos

O projeto está organizado da seguinte forma:

```
.
├── docker-compose.yml  # Orquestra Nginx, Backend e Database.
├── Dockerfile          # Instruções de construção do container do Backend.
├── script.js           # Código JS
├── style.js            # Código CSS
├── index.html          # Código HTML
├── nginx.conf          # Configuracao NGINX
├── modelo.html         # Modelo dos dados
└── README.md           # Este arquivo.
```

## 💡 Contribuindo

Toda contribuição é bem-vinda! Se encontrar um *bug*, tem uma sugestão de melhoria ou quer adicionar uma
funcionalidade, por favor:

1. **Fork** este repositório.
2. Crie um novo *branch* (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações e dê *commit*.
4. Abra um **Pull Request** para o *branch* principal.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
