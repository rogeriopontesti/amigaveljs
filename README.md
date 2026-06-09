# URL AMIGÁVEL com JS PURO sem Framework 😳

Projeto desenvolvido utilizando apenas HTML, CSS, Bootstrap e JavaScript puro para demonstrar a criação de URLs amigáveis sem frameworks e sem backend.

O objetivo deste projeto é mostrar como construir uma SPA (Single Page Application) simples utilizando recursos nativos do navegador, como History API, Fetch API e módulos JavaScript ES6.

---

## Demonstração

O sistema possui navegação entre páginas sem recarregar o navegador.

Rotas disponíveis:

* /
* /sobre
* /contato
* /404

Cada rota possui seu próprio template HTML carregado dinamicamente.

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript ES6 Modules
* History API
* Fetch API
* Apache
* Nginx

---

## Estrutura do Projeto

```text
amigaveljs/

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
├── config_apache.txt
├── config_nginx.txt
├── index.html
└── README.md
```

---

## Funcionamento

### app.js

Responsável por:

* Interceptar os cliques dos links.
* Evitar recarregamento da página.
* Acionar a navegação.
* Tratar os botões Voltar e Avançar do navegador.

### router.js

Responsável por:

* Definir as rotas da aplicação.
* Atualizar a URL.
* Atualizar o título da página.
* Carregar o template correto.

### renderer.js

Responsável por:

* Buscar os templates HTML.
* Inserir o conteúdo dentro do elemento #app.

---

## Exemplo de Rota

```javascript
const ROTAS = {
    "/": {
        template: "/templates/home.html",
        titulo: "Home"
    },
    "/sobre": {
        template: "/templates/sobre.html",
        titulo: "Sobre"
    },
    "/contato": {
        template: "/templates/contato.html",
        titulo: "Contato"
    }
};
```

---

## Atualização Dinâmica do Title

Além da URL amigável, o sistema também altera o título da página automaticamente.

```javascript
document.title = ROTA.titulo;
```

Exemplos:

* Home
* Sobre
* Contato
* 404

---

## History API

A navegação é realizada utilizando:

```javascript
history.pushState({}, "", url);
```

Isso permite alterar a URL sem recarregar a página.

---

## Apache

O arquivo:

```text
config_apache.txt
```

contém um exemplo de configuração utilizando .htaccess para manter as rotas funcionando após pressionar F5.

---

## Nginx

O arquivo:

```text
config_nginx.md
```

contém um exemplo de configuração utilizando:

```nginx
try_files $uri $uri/ /index.html;
```

permitindo que as URLs amigáveis funcionem corretamente após atualização da página.

---

## O Que Você Vai Aprender

* SPA sem Framework
* JavaScript Modular
* History API
* Fetch API
* Manipulação de Rotas
* URLs Amigáveis
* Atualização Dinâmica de Título
* Organização de Código
* Separação de Responsabilidades
* Clean Code

---

## Vídeo Explicando o Projeto

Este projeto foi desenvolvido para acompanhar o vídeo do canal Rogerio Pontes TI.

O objetivo é mostrar que é possível criar URLs amigáveis modernas utilizando apenas JavaScript puro, sem React, Angular, Vue ou qualquer framework.

---

## Autor

Rogerio Pontes

Canal: Rogerio Pontes TI

Compartilhando conhecimento sobre programação, arquitetura de software, JavaScript, PHP, Linux e desenvolvimento web.

---

## Vídeo Completo

📺 **Assista ao vídeo completo no YouTube:**

[▶️ URL Amigável sem Framework e sem Backend](https://youtu.be/0RDbccBC9YU)

---

## Canal Rogerio Pontes TI

🔔 Inscreva-se no canal:

[https://www.youtube.com/@rogeriopontesti](https://www.youtube.com/@rogeriopontesti)

Neste vídeo você aprenderá:

* Como criar URLs amigáveis com JavaScript puro.
* Como utilizar History API.
* Como renderizar páginas dinamicamente.
* Como alterar o título da página automaticamente.
* Como configurar Apache e Nginx.
* Como estruturar uma SPA sem frameworks.

---

## Código Fonte

O código completo deste projeto está disponível neste repositório.

Caso queira contribuir, fique à vontade para abrir Issues ou Pull Requests.

---

## Canal no YouTube

Se você gosta de conteúdos sobre:

* JavaScript
* PHP
* Linux
* Git e GitHub
* Clean Code
* Arquitetura de Software
* Desenvolvimento Web
* Programação para iniciantes

Inscreva-se no canal:

🎥 https://www.youtube.com/@rogeriopontesti

Novos vídeos todas as semanas.

---

## Licença

Este projeto é disponibilizado para fins educacionais.

Sinta-se livre para estudar, modificar e utilizar como base para seus próprios projetos.

