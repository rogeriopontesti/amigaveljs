# Configuração do Nginx para URL Amigável com JavaScript Puro

Este projeto utiliza a History API do navegador para criar URLs amigáveis sem recarregar a página.

Exemplos:

* /
* /sobre
* /contato

Quando o usuário acessa uma dessas URLs diretamente ou pressiona F5, o servidor precisa retornar sempre o arquivo `index.html`.

Caso contrário, o Nginx tentará localizar um arquivo físico chamado:

* sobre
* contato

e retornará erro 404.

---

## Arquivo de configuração

Crie um bloco semelhante ao exemplo abaixo:

```nginx
server {

    listen 80;

    server_name localhost;

    root /CAMINHO/DO/SEU/PROJETO;

    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

}
```

---

## Alterando o diretório raiz

Substitua:

```nginx
root /CAMINHO/DO/SEU/PROJETO;
```

pelo caminho real do projeto.

Exemplo:

```nginx
root /var/www/html/amigaveljs;
```

---

## Testando a configuração

Após salvar o arquivo execute:

```bash
sudo nginx -t
```

Se tudo estiver correto o Nginx exibirá:

```text
syntax is ok
test is successful
```

---

## Reiniciando o Nginx

Depois da validação execute:

```bash
sudo systemctl restart nginx
```

ou

```bash
sudo service nginx restart
```

---

## Como funciona

A instrução:

```nginx
try_files $uri $uri/ /index.html;
```

verifica:

1. Existe um arquivo físico?
2. Existe um diretório físico?
3. Caso não exista nenhum dos dois, retorna o arquivo `index.html`.

Isso permite que URLs como:

```text
/sobre
/contato
/produtos
```

continuem funcionando normalmente mesmo após atualizar a página.

---

## Estrutura recomendada

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
└── index.html
```

---

## Observação

Esta configuração é necessária apenas para ambientes utilizando Nginx.

Caso utilize Apache, consulte o arquivo `.htaccess` disponível neste projeto.
