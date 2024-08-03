import CardsTemplate from "../CardsTemplate.js"
import { Ajax } from "../../helpers/Ajax.js"
import Api from "../../helpers/Api.js"
import { NotFoundMessage } from "../NotFound.js"

const CharactersRender = async (props) => {
    if (!props) return await Ajax({ url: Api.characters, success: characters => CharactersRender(characters) })
    
    const $fragment = document.createDocumentFragment()
    const $template = CardsTemplate.$charactersTemplate.content
    const $dinamicContent = document.getElementById("dinamic-content")
    const $loader = document.querySelector(".loader")
    const $counter = document.querySelector(".counter")

    $loader.style.display = "block"
    $dinamicContent.innerHTML = null

    //Show Not Found Message
    if (props.error) {
        $loader.style.display = 'none'
        $counter.style.display = "none"

        if (!document.querySelector(".not-found-message")) {
            document.getElementById("main").insertAdjacentElement("beforeend", NotFoundMessage("Characters not found"))
        }
        return
    }

    const renderContent = () => {
        for (let character of props.results) {
            $template.querySelector("img").src = character.image
            $template.querySelector("img").alt = character.name
            $template.querySelector("h2").textContent = character.name
            $template.querySelector(".character-card").setAttribute("data-characterID", character.id)

            const $clone = document.importNode($template, true)
            $fragment.append($clone)
        }

        $dinamicContent.append($fragment)

        pagination()
    }

    const pagination = () => {
        //startLink
        const $startLink = document.createElement("div")
        $startLink.textContent = "start"
        $startLink.classList.add("start-link")

        //prevLink
        const $prevLink = document.createElement("div")
        $prevLink.textContent = "←"
        $prevLink.classList.add("prev-link")

        //nextLink
        const $nextLink = document.createElement("div")
        $nextLink.textContent = "→"
        $nextLink.classList.add("next-link")

        //endLink
        const $endLink = document.createElement("div")
        $endLink.textContent = "End"
        $endLink.classList.add("end-link")

        const $paginationContainer = document.createElement("article")
        $paginationContainer.classList.add("pagination-container")
        $paginationContainer.append($startLink, $prevLink, $nextLink, $endLink)

        document.querySelector(".dinamic-content").append($paginationContainer)
        
        renderPagination({
            $paginationContainer,
            $endLink,
            $startLink,
            $prevLink,
            $nextLink
        })
    }

    const renderPagination = (items) => {
        items.$paginationContainer.style.display = "flex"
        if (props.info.next === null) {
            items.$nextLink.classList.add("pagination-disabled")
            items.$endLink.classList.add("pagination-disabled")
        } else {
            items.$endLink.setAttribute("data-link", props.info.pages)
            items.$nextLink.setAttribute("data-link", props.info.next)
            items.$nextLink.classList.remove("pagination-disabled")
            localStorage.getItem("search") ? items.$endLink.classList.add("pagination-disabled") : items.$endLink.classList.remove("pagination-disabled")
        }

        if (props.info.prev === null) {
            items.$prevLink.classList.add("pagination-disabled")
            items.$startLink.classList.add("pagination-disabled")
        } else {
            items.$prevLink.setAttribute("data-link", props.info.prev)
            items.$startLink.setAttribute("data-link", 1)
            items.$prevLink.classList.remove("pagination-disabled")
            localStorage.getItem("search") ? items.$startLink.classList.add("pagination-disabled") : items.$startLink.classList.remove("pagination-disbled")
        }

        
    }

    // Render Content
    renderContent()

    $counter.style.display = "block"
    $counter.textContent = localStorage.getItem("search") ? `Characters found: ${props.info.count}` : `Total Characters: ${props.info.count}`
    $loader.style.display = "none"

    // Pagination's Events
    const charactersController = () => {
        const endLink = async (target) => {
            await Ajax({
                url: `${Api.characters}/?page=${target.dataset.link}`,
                success: (characters) => CharactersRender(characters)
            })
        }
    
        const startLink = async (target) => {
            await Ajax({
                url: `${Api.characters}/?page=${target.dataset.link}`,
                success: (characters) => CharactersRender(characters)
            })
        }
    
        const prevLink = async (target) => {
            await Ajax({
                url: target.dataset.link,
                success: (characters) => CharactersRender(characters)
            })
        }
    
        const nextLink = async (target) => {
            await Ajax({
                url: target.dataset.link,
                success: (characters) => CharactersRender(characters)
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

    charactersController()
}

export { CharactersRender }