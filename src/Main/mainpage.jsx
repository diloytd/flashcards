import style from "./main.module.scss";
import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from "animejs/lib/anime.es.js";
import { useState, useEffect, useRef } from "react";
function Main() {
    const remItem = useRef();

    useEffect(() => {
        const test = new Letterize({
            targets: remItem.current,
        });

        const animation = anime.timeline({
            targets: test.listAll,
            delay: anime.stagger(100, {
                grid: [test.list[0].length, test.list.length],
                from: "center",
            }),
            loop: true,
        });

        animation
            .add({
                scale: 0.5,
            })
            .add({
                letterSpacing: "13px",
            })
            .add({
                scale: 1,
            })
            .add({
                letterSpacing: "6px",
            });
    });

    return (
        <>
            <div className={style.container}>
                <h1 ref={remItem} className={style.animate}>Welcome,<pre> dear!</pre></h1>
            </div>
        </>
    );
}

export default Main;
