import styles from "./header.module.scss";
import "../Date/Fonts/Livvic-MediumItalic.ttf";
import "../Date/colors.scss";
import "../Date/mixins.scss";

import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
function Header({ show, setShow }) {
    let [currentState, setCurrentState] = useState(0);
    const change = () => {
        setShow(!show);
    };
    return (
        <>
            <header className={styles.header}>
                <div className={styles.nav}>
                    <button className={styles.btn} onClick={change}>
                        Войти
                    </button>
                    <div className={styles.container}>
                        <div className="newWords">
                            <Link to="/table" onclick={change}>
                                Новые слова
                            </Link>
                        </div>
                        <div className="card">
                            <Link to="/card" onclick={change}>
                                Карточки
                            </Link>
                        </div>
                        <div className="listWord">
                            <Link to="/table" onclick={change}>
                                Список слов
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
