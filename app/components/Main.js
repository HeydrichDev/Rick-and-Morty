import GlobalVariables from "../helpers/GlobalVariables.js"

export default function Main() {
    const $main = document.createElement("main")
    $main.id = "main"
    $main.classList.add("main")
    if(GlobalVariables.characters) $main.classList.add("grid-fluid")

    return $main
}