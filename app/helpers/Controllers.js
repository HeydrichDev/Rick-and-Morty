const charactersController = () => {
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
    
    const endLink = async (target) => {
        await Ajax({
            url: `${Api.characters}/?page=${target.dataset.link}`,
            success: (characters) => CharacterCard(characters)
        })
    }

    const startLink = async (target) => {
        await Ajax({
            url: `${Api.characters}/?page=${target.dataset.link}`,
            success: (characters) => CharacterCard(characters)
        })
    }

    const prevLink = async (target) => {
        await Ajax({
            url: target.dataset.link,
            success: (characters) => CharacterCard(characters)
        })
    }

    const nextLink = async (target) => {
        await Ajax({
            url: target.dataset.link,
            success: (characters) => CharacterCard(characters)
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

export {charactersController}