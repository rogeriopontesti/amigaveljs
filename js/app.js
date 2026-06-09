import { navegar } from "./router.js";

document.addEventListener("click", e => {
    const LINK = e.target.closest("a");

    if(!LINK){
        return;
    }

    const HREF = LINK.getAttribute("href");

    if(!HREF.startsWith("/")){
        return;
    }

    e.preventDefault();
    navegar(HREF);

});

window.addEventListener("popstate", () => {
    navegar(location.pathname);
});

navegar(location.pathname);