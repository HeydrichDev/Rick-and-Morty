import CharacterCard from "../components/characters/CharacterCard.js"
import Ajax from "./Ajax.js"
import Api from "./Api.js"
import GlobalVariables from "./GlobalVariables.js"

export default async function Router() {
    
    if (GlobalVariables.characters) {
        await Ajax({
            url: Api.characters,
            success: (characters) => {
                CharacterCard(characters)
            }
        })
    }

    document.addEventListener("click", async e => {
        window.scrollTo(0, 0)

        if (e.target.matches(".end-link")) await Ajax({ url: `${Api.characters}/?page=${e.target.dataset.link}`, success: (characters) => CharacterCard(characters) })
        if (e.target.matches(".start-link")) await Ajax({ url: `${Api.characters}/?page=${e.target.dataset.link}`, success: (characters) => CharacterCard(characters) })
        if (e.target.matches(".next-link")) await Ajax({ url: e.target.dataset.link, success: (characters) => CharacterCard(characters) })
        if (e.target.matches(".prev-link")) await Ajax({ url: e.target.dataset.link, success: (characters) => CharacterCard(characters) })
    })
}