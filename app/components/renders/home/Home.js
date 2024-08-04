const HomeRender = () => {
    const $root = document.getElementById("root")
    const $main = document.getElementById("main")
    const $homeContent = document.createElement("section")
    $homeContent.classList.add("home-content")
    $homeContent.innerHTML = `  
    <h2>Welcome to the Rick and Morty API</h2>
    
    <article>
    <img src="app/assets/HomeImage.webp" class="home-image">
                <div>
                    <h3>Explore various sections</h3>
                    <nav>
                    <a href="#/characters">Characters</a> <a href="#/episodes" >Episodes</a> <a href="#/locations">Locations</a> 
                    </nav>
                </div>
        </article>
        `

    $main.style.display = "none"
    if (document.querySelector(".home-content")) {
        document.querySelector(".home-content").style.display = "block"
        document.querySelector(".header").style.display = "none"
        return
    }
    $root.append($homeContent)
    document.querySelector(".header").style.display = "none"
}

export { HomeRender }