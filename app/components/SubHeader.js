import { Search } from "./Search.js"

export default function SubHeader() {
    //Title
    const $title = document.createElement("h2")
    $title.classList.add("title")
    
    if (location.hash === "#/characters") $title.textContent = "Characters:"
    if (location.hash === "#/episodes") $title.textContent = "Episodes:"
    if (location.hash === "#/locations") $title.textContent = "Locations:"

    //Sub Header Container
    const $subHeader = document.createElement("section")
    $subHeader.classList.add("sub-header")
    $subHeader.append($title, Search())
    return $subHeader
}