import { CharactersRender } from "./renders/Characters.js"
import { Ajax } from "../helpers/Ajax.js"
import Api from "../helpers/Api.js"

const Search = () => {
    //Search
    const $search = document.createElement("input")
    $search.name = "search"
    $search.type = "search"
    $search.placeholder = "Character's name"
    $search.pattern = "[A-Za-zÀ-ÿ\u00f1\u00d1\s]+"
    $search.title = "Only words"

    //Search Button
    const $searchButton = document.createElement("button")
    $searchButton.title = "search-button"
    $searchButton.classList.add("search-button")
    $searchButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`

    const $form = document.createElement("form")
    $form.classList.add("search-form")
    $form.append($search, $searchButton)

    document.addEventListener("submit", e => {
        e.preventDefault()
        if (!e.target === $form || !$search.value) return
        localStorage.setItem("searchName", $search.value)
        localStorage.setItem("search", true)
        if (location.hash === "#/characters") Ajax({ url: `${Api.searchCharacter}${$search.value}`, success: (characters) => CharactersRender(characters) })
    })

    document.addEventListener("search", e => {
        if (!e.target === $search) return
        if (!e.target.value) localStorage.removeItem("searchName")
    })

    $search.value = localStorage.getItem("searchName")
    localStorage.removeItem("search")
    return $form
}

export {Search}