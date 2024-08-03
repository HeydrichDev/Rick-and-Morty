const NotFoundMessage = (text) => {
    const $error = document.createElement("div")
    $error.classList.add("not-found-message")
    $error.innerHTML = `
        <p>${text}</p>
        <button class="help-button" >Got it</button>
    `

    return $error
}

export {NotFoundMessage}