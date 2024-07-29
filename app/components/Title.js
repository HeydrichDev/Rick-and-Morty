import GlobalVariables from "../helpers/GlobalVariables.js"

export default function Title() {
    const $title = document.createElement("h2")
    $title.classList.add("title")

    if (GlobalVariables.characters) $title.textContent = "Characters:"
    if (GlobalVariables.locations) $title.textContent = "Locations:"
    if (GlobalVariables.episodes) $title.textContent = "Epiosdes:"
    

    return $title
}