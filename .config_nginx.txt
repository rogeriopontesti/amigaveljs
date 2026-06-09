# URL Amigável com JavaScript Puro

Projeto desenvolvido utilizando apenas **HTML**, **CSS**, **Bootstrap** e **JavaScript Puro**, demonstrando como criar uma aplicação com **URLs amigáveis**, navegação dinâmica, carregamento de templates HTML e manipulação do histórico do navegador sem utilizar frameworks ou backend.

---

## 🎯 Objetivo

O objetivo deste projeto é mostrar que é possível construir uma experiência semelhante a uma SPA (Single Page Application) utilizando apenas recursos nativos do navegador.

Durante o desenvolvimento foram utilizados:

* History API
* Fetch API
* Templates HTML
* JavaScript Modular (ES Modules)
* Apache
* Nginx
* Bootstrap 5

---

## 📺 Vídeo Completo

Assista ao vídeo completo no YouTube:

👉 [URL Amigável sem Framework e sem Backend](https://youtu.be/SEU_VIDEO_AQUI)

---

## 🚀 Funcionalidades

* URL amigável
* Navegação sem recarregar a página
* Alteração dinâmica do título da página
* Carregamento de conteúdo via Fetch API
* Tratamento de página 404
* Estrutura modular utilizando JavaScript moderno
* Compatível com Apache
* Compatível com Nginx

---

## 📂 Estrutura do Projeto

```text
amigaveljs/
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── router.js
│   └── renderer.js
│
├── templates/
│   ├── home.html
│   ├── sobre.html
│   ├── contato.html
│   └── 404.html
│
├── .htaccess
├── .config_nginx.txt
├── index.html
└── README.md
```

## ⚙️ Como Funciona

### app.js

Responsável por:

* Interceptar cliques nos links.
* Impedir o recarregamento da página.
* Acionar o roteador.
* Controlar navegação utilizando History API.

### router.js

Responsável por:

* Definir as rotas.
* Atualizar o título da página.
* Chamar o renderizador.
* Tratar páginas inexistentes.

### renderer.js

Responsável por:

* Carregar os templates HTML.
* Inserir o conteúdo dinamicamente dentro da aplicação.

---

## 🔗 Rotas Disponíveis

| URL      | Página                |
| -------- | --------------------- |
| /        | Home                  |
| /sobre   | Sobre                 |
| /contato | Contato               |
| /404     | Página não encontrada |

---

## 🌐 Configuração Apache

Arquivo `.htaccess`

```apache
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule ^ index.html [L]
```

---

## 🌐 Configuração Nginx

Arquivo `.config_nginx.txt`

```nginx
server {

    listen 80;

    server_name localhost;

    root /caminho/do/seu/projeto;

    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

}
```

Substitua:

```text
/caminho/do/seu/projeto
```

pela pasta onde o projeto está instalado.

Exemplo:

```text
/var/www/html/amigaveljs
```

---

## 🛠 Tecnologias Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript ES6+
* Fetch API
* History API
* Apache
* Nginx

---

## 📚 Conceitos Demonstrados

* SPA (Single Page Application)
* JavaScript Modular
* Programação Orientada a Eventos
* Roteamento Front-End
* Renderização Dinâmica
* Manipulação de Histórico
* Clean Code
* Separação de Responsabilidades

---

## 🎥 Canal Rogerio Pontes TI

Se você gosta de conteúdos sobre:

* JavaScript
* PHP
* Linux
* Git e GitHub
* Arquitetura de Software
* Clean Code
* Desenvolvimento Web

Inscreva-se no canal:

👉 [https://www.youtube.com/@rogeriopontesti](https://www.youtube.com/@rogeriopontesti)

---

## ⭐ Apoie o Projeto

Se este projeto foi útil para você:

* Deixe uma estrela neste repositório.
* Compartilhe com outros desenvolvedores.
* Inscreva-se no canal para acompanhar novos projetos.

---

## 📄 Licença

Projeto disponibilizado para fins educacionais.

Sinta-se livre para estudar, modificar e utilizar como base para seus próprios projetos.