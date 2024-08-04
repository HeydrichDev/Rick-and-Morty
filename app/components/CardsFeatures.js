const CardsFeatures = (props) => {

    const $featuresContainer = document.createElement("div")
    $featuresContainer.classList.add("features-container")

    const $features = document.createElement("aside")
    $features.classList.add("features")

    $featuresContainer.append($features)
    $featuresContainer.style.display = "none"
    if (!props) return $featuresContainer
    
    const {image, name, status, species, type, gender, location, created, origin, episode} = props
    const convertCreated = new Date(created).toLocaleDateString()
    document.querySelector(".features").innerHTML = `
    <article>
        <div class="close">X</div>
        
        <img src=${image} alt=${name}>

        <div class="details">
            <p>Name: <b>${name}</b></p>
            <p>Status: <b>${status}</b></p>
            <p>Species: <b>${species}</b></p>
            <p>Type: <b>${!type ? "---" : type}</b></p>
            <p>Gender: <b>${gender}</b></p>
            <p>Origin: <b>${origin.name}</b></p>
            <p>Location: <b>${location.name}</b></p>
            <time datatime="${created}">Created: <b>${convertCreated}</b></time>
            <p>Episode: <b>${episode.length}</b></p>
            

        </div>
    </article>
    `

    document.querySelector(".features-container").style.display = "block"
    document.querySelector(".features").classList.add("features-active")

    return $featuresContainer
}

export { CardsFeatures }