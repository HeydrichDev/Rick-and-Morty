import { Ajax } from "../helpers/Ajax.js"
import Api from "../helpers/Api.js"
import { CharactersRender } from "./renders/Characters.js"
import { Search } from "./Search.js"

export default function SubHeader() {
    //Title
    const $title = document.createElement("h2")
    $title.classList.add("title")

    if (location.hash === "#/characters") $title.textContent = "Characters:"
    if (location.hash === "#/episodes") $title.textContent = "Episodes:"
    if (location.hash === "#/locations") $title.textContent = "Locations:"

    const $reloader = document.createElement("div")
    $reloader.classList.add("reloader")
    $reloader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/></svg>`

    //Sub Header Container
    const $subHeader = document.createElement("section")
    $subHeader.classList.add("sub-header")
    $subHeader.append($title, $reloader, Search())

    $reloader.addEventListener("click", e => {
        if (!localStorage.getItem("search")) return

        localStorage.removeItem("search")
        $reloader.classList.toggle("reloader-active")

        if (location.hash === "#/characters") {
            Ajax({ url: `${Api.characters}`, success: characters => CharactersRender(characters) })
        }

    })
    
    return $subHeader
}