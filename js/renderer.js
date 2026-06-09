export async function renderizar(caminho){
    const APP = document.querySelector("#app");
    const RESPOSTA = await fetch(caminho);
    APP.innerHTML = await RESPOSTA.text();
}