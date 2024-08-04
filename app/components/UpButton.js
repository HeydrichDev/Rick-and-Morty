const UpButton = () => {
    const $button = document.createElement("div")
    $button.classList.add("up-button")
    $button.textContent = "↑"
    $button.style.display = "none"

    window.addEventListener("scroll", e => {
        const { scrollTop } = document.documentElement
      
        scrollTop >= 300 ? document.querySelector(".up-button").style.display = "grid" : document.querySelector(".up-button").style.display = "none"
    })

    $button.addEventListener("click", e => window.scrollTo(0, 0))

    return $button
}

export {UpButton}