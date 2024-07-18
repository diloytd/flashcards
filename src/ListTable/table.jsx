import style from "./table.module.scss";
import React, { useState, useEffect } from "react";
import Row from "./row.jsx";

function Table({ date }) {
    const initialState = date.map((item, index) => ({
        english: item.english,
        transcription: item.transcription,
        russian: item.russian,
        key: item.id,
    }));
    const [state, setState] = useState(initialState);
    const removeItem = (index) => {
        setState((prevState) => prevState.filter((el, i) => i !== index));
    };
    return (
        <>
            <div className={style.container}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Английский</th>
                            <th>Транскрипция</th>
                            <th>Русский</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((item, index) => (
                            <Row
                                key={item.id}
                                english={item.english}
                                russian={item.russian}
                                transcription={item.transcription}
                                removeItem={removeItem}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
