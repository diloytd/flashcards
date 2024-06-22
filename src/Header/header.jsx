import styles from './header.module.scss'
import '../Date/Fonts/Livvic-MediumItalic.ttf'
import '../Date/colors.scss'
import '../Date/mixins.scss'
function Header (){
    return (
        <>
        <header className={styles.header}>
            <div className={styles.nav}>
        <button className={styles.btn}>Войти</button>
        <div className={styles.container}>
            <div className="newWords"><a href='#'>Новые слова</a></div>
            <div className="card"><a href='#'>Карточки</a></div>
            <div className="listWord"><a href='#'>Список слов</a></div>
        </div>
        </div>
        </header>
        </>
    )
}

export default Header