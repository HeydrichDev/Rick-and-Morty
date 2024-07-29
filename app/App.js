import Search from "./components/characters/Search.js"
import DinamicContent from "./components/DinamicContent.js"
import Header from "./components/Header.js"
import Loader from "./components/Loader.js"
import Container from "./components/Main.js"
import Title from "./components/Title.js"
import Router from "./helpers/Router.js"

export default function App() {
    const $root = document.getElementById("root")

    $root.append(Header())
    $root.append(Loader())
    $root.append(Container())
    
    const $main = document.getElementById("main")
    $main.append(Title())
    $main.append(Search())
    $main.append(DinamicContent())

    Router()
}