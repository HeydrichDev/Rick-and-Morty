export default function ErrorMessage(text) {
    const $error = document.createElement("div")
    $error.classList.add("error-message")
    $error.innerHTML = `
        <p>${text}</p>
        <button class="help-button" >Got it</button>
    `

    return $error
}