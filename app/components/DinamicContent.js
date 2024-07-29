import GlobalVariables from "../helpers/GlobalVariables.js"

export default function DinamicContent() {
    //Dinamic Content
    const $dinamicContent = document.createElement("section")
    if (GlobalVariables.characters) $dinamicContent.classList.add("grid-fluid")
    $dinamicContent.id = "dinamic-content"
    $dinamicContent.classList.add("dinamic-content")
    
    return $dinamicContent
}