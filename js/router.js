import { renderizar } from "./renderer.js";

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
    },
    "/404": {
        template: "/templates/404.html",
        titulo: "404"
    }
};

export async function navegar(url){
    const ROTA = ROTAS[url];

    if(!ROTA){
        navegar("/404");
        return;
    }

    history.pushState({}, "", url);

    document.title = ROTA.titulo;
    await renderizar(ROTA.template);
}