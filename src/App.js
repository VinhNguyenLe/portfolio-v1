import { useContext } from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Intro from "./components/Intro/Intro"
import ProductList from "./components/ProductList/ProductList"
import Toggle from "./components/Toggle/Toggle"
import { ThemeContext } from "./context"
import "./App.css"

const App = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className={darkMode ? "dark" : " "}>
            <Toggle />
            <Intro />
            <About />
            <ProductList />
            <Contact />
        </div>
    )
}

export default App
