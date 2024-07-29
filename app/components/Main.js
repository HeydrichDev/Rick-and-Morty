import GlobalVariables from "../helpers/GlobalVariables.js"

export default function Container() {
    //Global Main
    const $main = document.createElement("main")
    $main.id = "main"
    $main.classList.add("main")
    
    return $main
}