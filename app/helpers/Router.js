import CharacterCard from "../components/characters/CharacterCard.js"
import Ajax from "./Ajax.js"
import Api from "./Api.js"

export default async function Router() {

    if (localStorage.getItem("characters")) {
        localStorage.setItem("home", true)
        await Ajax({
            url: Api.characters,
            success: (characters) => CharacterCard(characters)
        })
    }

    const endLink = async (target) => {
        await Ajax({
            url: `${Api.characters}/?page=${target.dataset.link}`,
            success: (characters) => CharacterCard(characters)
        })
    }

    const startLink = async (target) => {
        await Ajax({
            url: `${Api.characters}/?page=${target.dataset.link}`,
            success: (characters) => CharacterCard(characters)
        })
    }

    const prevLink = async (target) => {
        await Ajax({
            url: target.dataset.link,
            success: (characters) => CharacterCard(characters)
        })
    }

    const nextLink = async (target) => {
        await Ajax({
            url: target.dataset.link,
            success: (characters) => CharacterCard(characters)
        })
    }

    const home = async () => {
        if (localStorage.getItem("home")) return
        localStorage.setItem("home", true)
        localStorage.removeItem("search")
        await Ajax({
            url: Api.characters,
            success: (characters) => CharacterCard(characters)
        })
    }

    const search = async () => {
        if (localStorage.getItem("search")) return
        localStorage.setItem("search", true)
        localStorage.removeItem("home")
        await Ajax({
            url: `${Api.searchCharacter}${localStorage.getItem("searchName")}`,
            success: (characters) => CharacterCard(characters)
        })
    }

    const helpButton = async (target) => {
        target.parentElement.style.display = "none"
        document.querySelector(".search-form input").focus()
    }

    const handlers = {
        ".end-link": endLink,
        ".start-link": startLink,
        ".next-link": nextLink,
        ".prev-link": prevLink,
        ".home": home,
        ".search": search,
        ".help-button": helpButton
    }

    document.addEventListener("click", async e => {
        for (const [selector, handler] of Object.entries(handlers)) {
            if (e.target.matches(selector)) {
                await handler(e.target)
                break
            }
        }
    })
}