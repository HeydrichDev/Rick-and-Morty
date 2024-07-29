import Template from "../Template.js"

export default function CharacterCard(props) {
    const $fragment = document.createDocumentFragment()
    
    for (let character of props) {
        Template.$charactersTemplate.content.querySelector("img").src = character.image
        Template.$charactersTemplate.content.querySelector("img").alt = character.name
        Template.$charactersTemplate.content.querySelector("h2").textContent = character.name

        const $clone = document.importNode(Template.$charactersTemplate.content, true)
        $fragment.append($clone)
    }

    document.getElementById("main").append($fragment)
}