export default function Header() {
    const $header = document.createElement("header")
    $header.classList.add("header")
    $header.innerHTML = `
        <h1>Rick and Morty</h1>
        <nav class="sub-menu"><span class="home">Home</span> <span class="search">Search</span></nav>
    `

    return $header
}