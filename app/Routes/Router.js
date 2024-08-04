import { CharactersRender } from "../components/renders/characters/CharactersCard.js";
import { HomeRender } from "../components/renders/home/Home.js";

export default function Router() {
    const $root = document.getElementById("root")
    const $main = document.getElementById("main")

    //Show Home
    if (!location.hash || location.hash === "#/home") return HomeRender()

    // Clean Home Content
    if (location.hash !== "#/home") {
        $root.append($main)
        $main.style.display = "block"
        document.querySelector(".header").style.display = "block"
        if (document.querySelector(".home-content")) document.querySelector(".home-content").style.display = "none"
    }

    //Show Characters
    if (location.hash === "#/characters") {
        CharactersRender()
        localStorage.removeItem("search")
        return
    }
}