import GlobalVariables from "../../helpers/GlobalVariables.js"

export default function SubHeader() {
    //Title
    const $title = document.createElement("h2")
    $title.classList.add("title")

    if (GlobalVariables.characters) $title.textContent = "Characters:"
    if (GlobalVariables.locations) $title.textContent = "Locations:"
    if (GlobalVariables.episodes) $title.textContent = "Epiosdes:"
    
    //Search
    const $search = document.createElement("input")
    $search.type = "search"
    $search.placeholder = "Character's name"

    //Search Button
    const $searchButton = document.createElement("div")
    $searchButton.classList.add("search-button")
    $searchButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`

    const $form = document.createElement("form")
    $form.classList.add("search")
    $form.append($search, $searchButton)


    //Sub Header Container
    const $subHeader = document.createElement("section")
    $subHeader.classList.add("sub-header")
    $subHeader.append($title, $form)

    //Event
    document.addEventListener("click", e => {
        if (e.target.matches(".search-button *")) {
            $search.classList.toggle("is-active")
            $searchButton.innerHTML.includes("search-svg")
            ? $searchButton.innerHTML = `<svg class="exit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`
            : $searchButton.innerHTML = `<svg class="search-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#74C0FC" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`
        }
    })

    return $subHeader
}