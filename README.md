# Como criar URLs amigáveis usando apenas JavaScript

Neste projeto você aprenderá como criar uma **SPA (Single Page Application)** utilizando apenas **JavaScript puro**, sem React, Vue, Angular ou qualquer outro framework.

O objetivo é mostrar que é possível implementar **roteamento**, **URLs amigáveis**, **renderização dinâmica de páginas** e uma arquitetura organizada utilizando apenas recursos nativos do navegador.

Este projeto serve como base para entender como frameworks modernos funcionam internamente e será evoluído nos próximos vídeos para uma loja virtual completa.

---

# 🎥 Vídeo Completo

https://youtu.be/0RDbccBC9YU

---

# 📚 O que você vai aprender

✅ Como criar URLs amigáveis usando JavaScript puro

✅ Como criar uma SPA (Single Page Application)

✅ Como utilizar a History API

✅ Como utilizar o método `history.pushState()`

✅ Como carregar páginas utilizando a Fetch API

✅ Como trabalhar com JavaScript ES Modules

✅ Como importar e exportar funções

✅ Como renderizar HTML dinamicamente

✅ Como organizar um projeto JavaScript sem frameworks

✅ Como separar responsabilidades em módulos

✅ Como alterar o título da página automaticamente

✅ Como configurar Apache para SPAs

✅ Como configurar Nginx para SPAs

---

# 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript ES6 Modules
- History API
- Fetch API
- Apache
- Nginx

---

# 📁 Estrutura do projeto

```text
amigaveljs/

├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── router.js
│   └── render.js
│
├── templates/
│   ├── index.html
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

# 📂 Organização dos arquivos

## app.js

Responsável por:

- Interceptar os cliques dos links.
- Impedir o recarregamento da página.
- Acionar o roteador.
- Tratar os botões Voltar e Avançar do navegador.

---

## router.js

Responsável por:

- Declarar todas as rotas.
- Alterar a URL.
- Atualizar o título da página.
- Chamar a renderização do template.

---

## render.js

Responsável por:

- Buscar os templates HTML utilizando Fetch API.
- Inserir o conteúdo dentro da aplicação.

---

# 📌 Exemplo das rotas

```javascript
const rotas = {
    "/": {
        template: "templates/index.html",
        titulo: "Home"
    },

    "/sobre": {
        template: "templates/sobre.html",
        titulo: "Sobre"
    },

    "/contato": {
        template: "templates/contato.html",
        titulo: "Contato"
    }
};
```

---

# 🧩 Renderização dinâmica

```javascript
export async function renderizar(caminho){

    const app = document.querySelector("#app");

    const resposta = await fetch(caminho);

    app.innerHTML = await resposta.text();

}
```

---

# 🌐 Alterando a URL sem recarregar

A navegação acontece utilizando a History API.

```javascript
history.pushState({}, "", url);
```

Isso permite alterar a URL mantendo a aplicação carregada.

---

# 📝 Alterando o título da página

```javascript
document.title = rota.titulo;
```

Cada rota possui seu próprio título.

Exemplos:

- Home
- Sobre
- Contato
- 404

---

# ⚡ Carregando templates com Fetch API

```javascript
const resposta = await fetch(caminho);

app.innerHTML = await resposta.text();
```

Cada página é carregada dinamicamente sem necessidade de atualizar o navegador.

---

# 🌎 Configuração do Apache

O arquivo

```text
config_apache.txt
```

contém uma configuração utilizando **.htaccess** para que as URLs amigáveis continuem funcionando após atualizar a página (F5).

---

# 🌎 Configuração do Nginx

O arquivo

```text
config_nginx.txt
```

contém a configuração utilizando:

```nginx
try_files $uri $uri/ /index.html;
```

Essa configuração evita o erro 404 ao atualizar qualquer rota da aplicação.

---

# 🧠 Conceitos abordados

- JavaScript Puro
- SPA
- Single Page Application
- URLs Amigáveis
- History API
- Fetch API
- JavaScript Modules
- Import e Export
- Arquitetura Modular
- Organização de Código
- Separação de Responsabilidades
- Desenvolvimento Web

---

# 🚀 Próxima etapa

Este projeto será evoluído nos próximos vídeos para uma aplicação muito mais completa.

Serão adicionados:

- Cadastro de produtos
- Listagem dinâmica
- Carrinho de compras
- Login
- Checkout
- Persistência de dados
- Componentes reutilizáveis
- Arquitetura modular

Tudo utilizando apenas JavaScript puro.

---

# 📂 Código-fonte

Este repositório acompanha o vídeo publicado no canal **Rogerio Pontes TI**.

O objetivo é demonstrar, na prática, que conceitos normalmente associados a frameworks podem ser implementados utilizando apenas as APIs nativas do navegador.

---

# 📺 Canal Rogerio Pontes TI

Se você gosta de conteúdos sobre:

- JavaScript
- PHP
- Linux
- Git e GitHub
- Arquitetura de Software
- Clean Code
- Desenvolvimento Web
- Programação

inscreva-se no canal para acompanhar os próximos projetos.

https://www.youtube.com/@rogeriopontesti

---

# 👨‍💻 Autor

Rogerio Pontes

Canal: Rogerio Pontes TI

---

# 📄 Licença

Este projeto possui finalidade exclusivamente educacional.

Sinta-se à vontade para estudar, modificar e utilizar o código como base para seus próprios projetos.
