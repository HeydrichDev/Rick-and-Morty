export default function Header() {
    const $header = document.createElement("header")
    $header.classList.add("header")
    $header.innerHTML = `
        <h1>Rick and Morty</h1>
        <nav class="sub-menu"><a href="#/home">Home</a> <a href="#/characters" >Characters</a> <a href="#/locations">Locations</a> <a href="#/episodes">Episodes</a> </nav>
    `

    return $header
}