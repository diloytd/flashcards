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
    const [showComponent, setShowComponent] = useState({
        english: english,
        transcription: transcription,
        russian: russian
    });
    // const [inputEnglish, setInputEnglish] = useState(english);
    // const [inputTranscription, setInputTranscription] = useState(transcription);
    // const [inputRussian, setInputRussian] = useState(russian);
    const [inputValue, setInputValue] = useState({
        english: '',
        transcription: '',
        russian: ''
    })
    const handleEdit = () => {
        setShowComponent(false);
       
    };
    const handleOk = () => {
        setShowComponent(true);
        
    };

    const handleChangeValue = (e) => {
        const value = e.target.value
        const name = e.target.name
        setInputValue({
            ...inputValue,
            [name]: value
        })
        
    }
console.log(inputValue.english)
console.log(showComponent.english)
useEffect(() => {
    setInputValue({
        english: english,
        transcription: transcription,
        russian: russian
    });
}, [english, transcription, russian]);

    return (
        <>
            {showComponent ? (
                <>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{english}</td>
                        <td>{transcription}</td>
                        <td>{russian}</td>
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
                            value={inputValue.english}
                            name="english"
                            onChange={handleChangeValue}
                        />
                    </td>
                    <td>
                        <input
                            className={style.input}
                            value={inputValue.transcription}
                            name="transcription"
                            onChange={handleChangeValue}
                        ></input>
                    </td>
                    <td>
                        <input
                            className={style.input}
                            value={inputValue.russian}
                            name="russian"
                            onChange={handleChangeValue}
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


// setShowComponent({
  //  english: inputValue.english
//})