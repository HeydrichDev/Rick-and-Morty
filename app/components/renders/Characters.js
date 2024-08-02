import CardsTemplate from "../CardsTemplate.js"
import { charactersController } from "../../helpers/Controllers.js"

const CharactersRender = () => {
    const $fragment = document.createDocumentFragment()
    const $template = CardsTemplate.$charactersTemplate.content
    const $paginationContainer = document.querySelector(".pagination-container")
    const $startLink = document.querySelector(".start-link")
    const $prevLink = document.querySelector(".prev-link")
    const $nextLink = document.querySelector(".next-link")
    const $endLink = document.querySelector(".end-link")
    const $dinamicContent = document.getElementById("dinamic-content")
    const $loader = document.querySelector(".loader")
    const $counter = document.querySelector(".counter")

    $loader.style.display = "block"
    $dinamicContent.innerHTML = null
    console.log(props)

    if (props.error) {
        $loader.style.display = 'none'
        $paginationContainer.style.display = "none"
        $counter.style.display = "none"
        document.getElementById("main").insertAdjacentElement("beforeend", ErrorMessage("Characters not found"))
        return
    }

    const paintContent = () => {
        for (let character of props.results) {
            $template.querySelector("img").src = character.image
            $template.querySelector("img").alt = character.name
            $template.querySelector("h2").textContent = character.name

            const $clone = document.importNode($template, true)
            $fragment.append($clone)
        }

        $dinamicContent.append($fragment)

        pagination()
    }

    const pagination = () => {
        $paginationContainer.style.display = "flex"
        if (props.info.next === null) {
            $nextLink.classList.add("pagination-disabled")
            $endLink.classList.add("pagination-disabled")
        } else {
            $endLink.setAttribute("data-link", props.info.pages)
            $nextLink.setAttribute("data-link", props.info.next)
            $nextLink.classList.remove("pagination-disabled")
            $endLink.classList.remove("pagination-disabled")
        }

        if (props.info.prev === null) {
            $prevLink.classList.add("pagination-disabled")
            $startLink.classList.add("pagination-disabled")
        } else {
            $prevLink.setAttribute("data-link", props.info.prev)
            $startLink.setAttribute("data-link", 1)
            $prevLink.classList.remove("pagination-disabled")
            $startLink.classList.remove("pagination-disabled")
        }
    }

    paintContent()

    $counter.style.display = "block"
    $counter.textContent = localStorage.getItem("search") ? `Characters found: ${props.info.count}` : `Total Characters: ${props.info.count}`
    $loader.style.display = "none"
}

export { CharactersRender }