export default function Pagination() {
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

    return $paginationContainer

}