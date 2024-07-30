import CharacterCard from "../components/characters/CharacterCard.js"
import Ajax from "./Ajax.js"
import Api from "./Api.js"
import GlobalVariables from "./GlobalVariables.js"

export default async function Router() {
    const $main = document.getElementById("main")

    if (GlobalVariables.characters) {
        await Ajax({
            url: Api.characters,
            success: (characters) => {
                CharacterCard(characters)
            }
        })
    }

    document.querySelector(".loader").style.display = "none"
}