import { ButtonOk, ButtonDelete, ButtonEdit } from "./button.jsx";
import style from "./table.module.scss";
import React, { useState, useEffect } from "react";

export default function Row({
    date,
    item,
    index,
    transcription,
    russian,
    english,
    removeItem,
}) {
    //
    const [showComponent, setShowComponent] = useState(true);
    const [inputEnglish, setInputEnglish] = useState(english);
    const [inputTranscription, setInputTranscription] = useState(transcription);
    const [inputRussian, setInputRussian] = useState(russian);
    const handleEdit = () => {
        setShowComponent(false);
    };
    const handleOk = () => {
        setShowComponent(true);
    };

    useEffect(() => {
        setShowComponent;
        setInputEnglish(english);
        setInputTranscription(transcription);
        setInputRussian(russian);
    }, [english, transcription, russian]);

    return (
        <>
            {showComponent ? (
                <>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{inputEnglish}</td>
                        <td>{inputTranscription}</td>
                        <td>{inputRussian}</td>
                        <ButtonDelete onClick={() => removeItem(index)} />
                        <ButtonEdit onClick={handleEdit} />
                        <ButtonOk onClick={handleOk} />
                    </tr>
                </>
            ) : (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        <input
                            className={style.input}
                            value={inputEnglish}
                            onChange={(e) => setInputEnglish(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            className={style.input}
                            value={inputTranscription}
                            onChange={(e) =>
                                setInputTranscription(e.target.value)
                            }
                        ></input>
                    </td>
                    <td>
                        <input
                            className={style.input}
                            value={inputRussian}
                            onChange={(e) => setInputRussian(e.target.value)}
                        ></input>
                    </td>
                    <ButtonDelete onClick={() => removeItem(index)} />
                    <ButtonEdit onClick={handleEdit} />
                    <ButtonOk onClick={handleOk} />
                </tr>
            )}
        </>
    );
}
