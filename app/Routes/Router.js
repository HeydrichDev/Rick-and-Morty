import { CharactersRender } from "../components/renders/Characters.js";
import { HomeRender } from "../components/renders/Home.js";

export default function Router() {
    let router
    const $root = document.getElementById("root")
    const $main = document.getElementById("main")

    if (!location.hash || location.hash === "#/home") return HomeRender() 
    
    if (location.hash !== "#/home") {
        $root.append($main)
        $main.style.display = "block"
        document.querySelector(".header").style.display = "block"
        document.querySelector(".home-content").style.display = "none"
    }

    if (location.hash === "#/characters") CharactersRender()
}