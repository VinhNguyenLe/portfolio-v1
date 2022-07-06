import "./Toggle.css"
import Sun from "../../imgs/sun.png"
import Moon from "../../imgs/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

function Toggle() {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className="t">
            <img src={Sun} alt="img" className="t-icon" />
            <img src={Moon} alt="img" className="t-icon" />
            <div
                className="t-button"
                style={{
                    left: theme.state.darkMode ? 4 : 26,
                    backgroundColor: theme.state.darkMode
                        ? "#ffcd3e"
                        : "#59b256",
                }}
                onClick={handleClick}
            ></div>
        </div>
    )
}

export default Toggle
