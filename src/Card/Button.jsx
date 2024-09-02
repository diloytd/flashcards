import style from "./card.module.scss";
import Card from "./Card.jsx";
import Context from "../Context.js";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import classNames from "classnames";
import { useState, useRef, useContext } from "react";

export default function ChangeCard() {
    const {currentState, setCurrentState, isLoading, getDates} =
        useContext(Context);
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(true);
    const [learnWord, setLearnWord] = useState(0);
    const btn = useRef();
    const focusRef = useRef();

    const nextSlide = () => {
        if (count >= currentState.length - 1) {
            setCount(0);
            btn.current.disabled = true;
        }
        setCount(count + 1);
        setClick(true);
    };

    const prevSlide = () => {
        if (count == 0) {
            setCount(currentState.length - 1);
            btn.current.disabled = true;
        }
        setCount(count - 1);
        setClick(true);
    };

    const showLearnWord = () => {
        setLearnWord(learnWord + 1);
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.carusel}>
                    <BsArrowLeftCircleFill
                        className={classNames(style.arrow, style.arrow_left)}
                        onClick={prevSlide}
                    />
                    <div className={style.learnWord}>
                        <p>I know {learnWord} words</p>

                        <Card
                            {...currentState[count]}
                            click={click}
                            setClick={setClick}
                            showLearnWord={showLearnWord}
                            focusRef={focusRef}
                        />
                    </div>

                    <BsArrowRightCircleFill
                        className={classNames(style.arrow, style.arrow_rigth)}
                        onClick={nextSlide}
                        ref={btn}
                    />
                </div>
            </div>
        </>
    );
}
