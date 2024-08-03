import App from "./App.js";
import Router from "./Routes/Router.js";

document.addEventListener("DOMContentLoaded", App)
window.addEventListener("hashchange", e => {
    Router()
    const $title = document.querySelector(".title")
    if (location.hash === "#/characters") $title.textContent = "Characters:"
    if (location.hash === "#/episodes") $title.textContent = "Episodes:"
    if (location.hash === "#/locations") $title.textContent = "Locations:"
})