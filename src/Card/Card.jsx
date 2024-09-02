import style from "./card.module.scss";
import classNames from "classnames";
import { forwardRef } from "react";
const Card = forwardRef(
    (
        {
            id,
            transcription,
            english,
            russian,
            click,
            setClick,
            showLearnWord,
            focusRef,
        },
        ref
    ) => {
        let handleClick = () => {
            setClick(false);
            showLearnWord();
        };
        return (
            <>
                <div className={classNames(style.card)} id={id}>
                    <p className={style.word}>{english}</p>
                    <p className={style.transcription}>{transcription}</p>
                    {click ? (
                        <button
                            className={classNames(style.btn)}
                            onClick={handleClick}
                            ref={focusRef}
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
);

Card.displayName = "Card";
export default Card;
