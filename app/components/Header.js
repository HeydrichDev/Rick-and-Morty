export default function Header() {
    const $header = document.createElement("header")
    $header.classList.add("header")
    $header.innerHTML = `
        <h1>Rick and Morty</h1>
        <nav class="sub-menu"><a href="#/home" class="home">Home</a> <a href="#/characters" class="characters" >Characters</a> <a href="#/locations" class="locations">Locations</a> <a href="#/episodes" class="episodes">Episodes</a> </nav>
    `

    const menuItems = [".home", ".characters", ".locations", ".episodes"]
    
    document.addEventListener("click", e => {
        for (const selector of menuItems) {
            if (e.target.matches(selector)) {
                window.scrollTo(0, 0)
                break
            }
        }
    })


    return $header
}