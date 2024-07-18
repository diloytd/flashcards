import style from "./card.module.scss";
import classNames from "classnames";

function Card({ id, transcription, english, russian, click, setClick }) {
    let handleClick = () => {
        setClick(false);
    };

    return (
        <>
           <div key={id} className={classNames(style.card)}>
                        <p className={style.word}>{english}</p>
                        <p className={style.transcription}>{transcription}</p>
                        {click ? (
                            <button
                                className={classNames(style.btn)}
                                onClick={handleClick}
                            >
                                translate
                            </button>
                        ) : (
                            <p className={classNames(style.p)}>{russian}</p>
                        )}
                    </div>
        </>
    );
}
export default Card;

