export default function Header() {
    const $header = document.createElement("header")
    $header.classList.add("header")
    $header.innerHTML = `
        <h1>Rick and Morty</h1>
    `

    //Local Menu Bar
    const $menu = document.createElement("nav")
    $menu.innerHTML = `<span class="home">Home</span> - <span class="">Search</span>`

    return $header
}