export default function Search() {
    const $search = document.createElement("input")
    $search.type = "search"
    $search.placeholder = "Character's name"
    const $form = document.createElement("form")
    $form.classList.add("search")
    $form.append($search)
    

    return $form
}