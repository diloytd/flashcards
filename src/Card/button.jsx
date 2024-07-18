import style from "./card.module.scss";
import Card from "./card";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import classNames from "classnames";
import Date from "../Date/date.json"
import { useState, useRef, useEffect } from "react";
export default function ChangeCard ({ date, currentState, setCurrentState}) {
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(true);
    const btn = useRef();
    console.log(Date.length - 1)
    const nextSlide = () => {
        if(count >= Date.length - 1){
            setCount(0);
             btn.current.disabled = true;
            
}
       setCount(count + 1);
        setClick(true);
    };

    const prevSlide = () => {
        if(count == 0){
            setCount(Date.length - 1);
            btn.current.disabled = true;
        }
        setCount(count - 1);
        setClick(true);
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.carusel}>
                    <BsArrowLeftCircleFill
                        className={classNames(style.arrow, style.arrow_left)}
                        onClick={prevSlide}
                    />
                        <Card
                        {...currentState[count]}
                        click={click}
                        setClick={setClick}
                    />
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