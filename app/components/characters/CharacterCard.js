import Ajax from "../../helpers/Ajax.js"
import Api from "../../helpers/Api.js"
import Template from "../Template.js"

export default function CharacterCard(props) {
    const $fragment = document.createDocumentFragment()
    const $startLink = document.querySelector(".start-link")
    const $prevLink = document.querySelector(".prev-link")
    const $nextLink = document.querySelector(".next-link")
    const $endLink = document.querySelector(".end-link")

    document.querySelector(".dinamic-content").innerHTML = ""
    for (let character of props.results) {
        Template.$charactersTemplate.content.querySelector("img").src = character.image
        Template.$charactersTemplate.content.querySelector("img").alt = character.name
        Template.$charactersTemplate.content.querySelector("h2").textContent = character.name

        const $clone = document.importNode(Template.$charactersTemplate.content, true)
        $fragment.append($clone)
    }

    document.getElementById("dinamic-content").append($fragment)

    if (props.info.next === null) {
        $nextLink.style.display = "none"
        $endLink.style.display = "none"
    } else {
        $endLink.setAttribute("data-link", props.info.pages)
        $nextLink.setAttribute("data-link", props.info.next)
        $nextLink.style.display = "block"
        $endLink.style.display = "block"
    }

    if (props.info.prev === null) {
        $prevLink.style.display = "none"
        $startLink.style.display = "none"
    } else {
        $prevLink.setAttribute("data-link", props.info.prev)
        $startLink.setAttribute("data-link", props.info.pages / props.info.pages)
        $prevLink.style.display = "block"
        $startLink.style.display = "block"
    }

    document.addEventListener("click", e => {
        if (e.target.matches(".start-link")) Ajax({ url: `${Api.characters}/?page=${e.target.dataset.link}`, success: (characters) => CharacterCard(characters) })
        if (e.target.matches(".end-link")) Ajax({ url: `${Api.characters}/?page=${e.target.dataset.link}`, success: (characters) => CharacterCard(characters) })
    })

}