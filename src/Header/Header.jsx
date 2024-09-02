import styles from "./header.module.scss";
import "../Date/Fonts/Livvic-MediumItalic.ttf";
import "../Date/colors.scss";
import "../Date/mixins.scss";
import {BrowserRouter as Router, Link} from "react-router-dom";
function Header({ show, setShow }) {
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
                            <Link to="/table" onClick={change}>
                                Новые слова
                            </Link>
                        </div>
                        <div className="card">
                            <Link to="/card" onClick={change}>
                                Карточки
                            </Link>
                        </div>
                        <div className="listWord">
                            <Link to="/table" onClick={change}>
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
