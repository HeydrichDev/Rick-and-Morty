import Pagination from "./components/characters/Pagination.js"
import SubHeader from "./components/characters/SubHeader.js"
import DinamicContent from "./components/DinamicContent.js"
import Header from "./components/Header.js"
import Loader from "./components/Loader.js"
import Container from "./components/Main.js"
import Router from "./helpers/Router.js"

export default function App() {
    const $root = document.getElementById("root")

    $root.append(Header())
    $root.append(Container())
    
    const $main = document.getElementById("main")
    $main.append(SubHeader())
    $root.append(Loader())
    $main.append(DinamicContent())
    $main.append(Pagination())
    Router()
}