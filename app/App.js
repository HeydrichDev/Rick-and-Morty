import Header from "./components/Header.js"
import Loader from "./components/Loader.js"
import Main from "./components/Main.js"
import Router from "./helpers/Router.js"

export default function App() {
    const $root = document.getElementById("root")

    $root.append(Header())
    $root.append(Loader())
    $root.append(Main())

    Router()
}