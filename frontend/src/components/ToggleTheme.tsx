import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "../styles/ToggleTheme.module.css";

function ToggleTheme() {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const [theme, setTheme] = useState<"light" | "dark">(savedTheme === "light" ? "light" : "dark");

    useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={styles.theme}
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />} 
        </button>
    );
}

export default ToggleTheme;