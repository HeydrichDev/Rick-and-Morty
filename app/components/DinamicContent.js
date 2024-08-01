export default function DinamicContent() {
    //Dinamic Content
    const $dinamicContent = document.createElement("section")
    if (localStorage.getItem("characters") || localStorage.getItem("characters") === null) $dinamicContent.classList.add("grid-fluid")
    $dinamicContent.id = "dinamic-content"
    $dinamicContent.classList.add("dinamic-content")
    
    return $dinamicContent
}