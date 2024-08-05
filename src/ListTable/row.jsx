import { ButtonOk, ButtonDelete, ButtonEdit } from "./button.jsx";
import style from "./table.module.scss";
import React, { useState, useEffect, useRef } from "react";
import ValidForm from "./validForm.js";
export default function Row({
    date,
    item,
    index,
    transcription,
    russian,
    english,
    removeItem,
}) {
    const [showComponent, setShowComponent] = useState(true);
    const elem = useRef();
    const [valid, setValid] = useState(false);
    const [border, setBorder] = useState("black");
    const [ blockBtn, setBlockBtn] = useState(false)

    const [inputValue, setInputValue] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
    });

    const handleOk = () => {
      
       trysmth();
    };

    const handleChangeValue = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleEdit = () => {
        setShowComponent(false); 
    };

    // const trysmth = (e) => {
        
    //         if (inputValue.english == "") {
    //             setShowComponent(false);
    //             setValid(true);
    //             setBorder("red");
    //             setBlockBtn(true)
    //         } else  if (inputValue.english !== "") {
                
    //             setBorder("black");
    //             setValid(false);
    //             setBlockBtn(false)
    //             setShowComponent(true);
    //         }
    //         if (inputValue.transcription == "") {
    //             setShowComponent(false);
    //             setValid(true);
    //             setBorder("red");
    //             setBlockBtn(true)
    //         } else  if (inputValue.transcription !== "") {
                
    //             setBorder("black");
    //             setValid(false);
    //             setBlockBtn(false)
    //             setShowComponent(true);
    //         }
    //         if (inputValue.russian == "") {
    //             setShowComponent(false);
    //             setValid(true);
    //             setBorder("red");
    //             setBlockBtn(true)
    //         } else  if (inputValue.russian !== "") {
                
    //             setBorder("black");
    //             setValid(false);
    //             setBlockBtn(false)
    //             setShowComponent(true);
    //         }
    // };

    const trysmth = () => {
        const emptyFields = ["english", "transcription", "russian"].filter(
            (field) => inputValue[field] === ""
        );

        if (emptyFields.length > 0) {
            setShowComponent(false);
            setValid(true);
            setBorder("red");
            setBlockBtn(true);
        } else {
            setShowComponent(true);
            setValid(false);
            setBorder("black");
            setBlockBtn(false);
        }
    };

    useEffect(() => {
        setInputValue({
            english: english,
            transcription: transcription,
            russian: russian,
        });
    }, [english, transcription, russian]);

    return (
        <>
            {showComponent ? (
                <>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{inputValue.english}</td>
                        <td>{inputValue.transcription}</td>
                        <td>{inputValue.russian}</td>

                        <ButtonDelete onClick={() => removeItem(index)} />
                        <ButtonEdit onClick={handleEdit} />
                        <ButtonOk onClick={handleOk} />
                    </tr>
                </>
            ) : (
                <>
                    <tr>
                        {valid ? (
                            <p style={{ color: "red" }}>незаполненное поле</p>
                        ) : null}
                    </tr>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <input
                                style={{ borderColor: `${border}` }}
                                className={style.input}
                                value={inputValue.english}
                                name="english"
                                onChange={handleChangeValue}
                            />
                        </td>
                        <td>
                            <input
                                style={{ borderColor: `${border}` }}
                                className={style.input}
                                value={inputValue.transcription}
                                name="transcription"
                                onChange={handleChangeValue}
                            ></input>
                        </td>
                        <td>
                            <input
                                style={{ borderColor: `${border}` }}
                                className={style.input}
                                value={inputValue.russian}
                                name="russian"
                                onChange={handleChangeValue}
                            ></input>
                        </td>
                        <ButtonDelete onClick={() => removeItem(index)} />
                        <ButtonEdit onClick={handleEdit} />
                        <ButtonOk onClick={handleOk} ref={elem} disabled={blockBtn} />
                    </tr>
                </>
            )}
        </>
    );
}

// setShowComponent({
//  english: inputValue.english
//})
