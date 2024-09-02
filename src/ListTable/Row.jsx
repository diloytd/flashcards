import Button from "./Button.jsx";
import { useState, useEffect, useRef, useContext } from "react";
import { urlImg, urlImg2, urlImg3 } from "../assets/icons.jsx";
import Input from "./Input.jsx";
import Context from "../Context.js";
export default function Row({
    id,
    english,
    russian,
    transcription,
    removeItem,
    aaa,
    index,
    editWord
}) {
    const {
        currentState,
        setCurrentState,
        
        changeWord,
        setChangeWord,
    } = useContext(Context);
    const [showComponent, setShowComponent] = useState(true);
    const elem = useRef();

    const handleOk = () => {
        const { id } = changeWord;  // Извлекаем id из объекта changeWord
        editWord(id);
       
        setShowComponent(true);
       
    };
    
    const handleEdit = () => {
        console.log(changeWord)
      setChangeWord({ english, transcription, russian, id,  tags: "",
         tags_json: "" });
        setShowComponent(false);
    };



    const handleRemove = (id) => {
        removeItem(id);
    };

    const handleChangeWord = (e) => {
        const { name, value } = e.target;
        const obj = {
            ...changeWord,
            [name]: value,
        };
        setChangeWord(obj);
        console.log(obj);
    };

    return (
        <>
            {showComponent ? (
                <>
                    <tr id={id}>
                        <td>{index + 1}</td>
                        <td>{english}</td>
                        <td>{transcription}</td>
                        <td>{russian}</td>
                        <td>
                            <Button onClick={() => handleRemove(id)}>
                                <img
                                    src={urlImg2}
                                    alt="button icon"
                                    width={30}
                                    height={20}
                                />
                            </Button>
                            <Button onClick={handleEdit}>
                                <img
                                    src={urlImg3}
                                    alt="button icon"
                                    width={30}
                                    height={20}
                                />
                            </Button>
                            <Button onClick={() => handleOk(id)}>
                                <img
                                    src={urlImg}
                                    alt="button icon"
                                    width={30}
                                    height={20}
                                />
                            </Button>
                        </td>
                    </tr>
                </>
            ) : (
                <>
                    <tr data-id={id}>
                        <td>{index + 1}</td>
                        <td>
                            <input
                                value={changeWord.english}
                                name="english"
                                onChange={handleChangeWord}
                            />
                        </td>
                        <td>
                            <input
                                data-id={id}
                                value={changeWord.transcription}
                                name="transcription"
                                onChange={handleChangeWord}
                            />
                        </td>
                        <td>
                            <input
                                data-id={id}
                                value={changeWord.russian}
                                name="russian"
                                onChange={handleChangeWord}
                            />
                        </td>
                        <td>
                            <Button  onClick={() => removeItem(id)}>
                                <img
                                    src={urlImg2}
                                    alt="button icon"
                                    width={30}
                                    height={20}
                                />
                            </Button>
                            <Button onClick={handleEdit}>
                                <img
                                    src={urlImg3}
                                    alt="button icon"
                                    width={30}
                                    height={20}
                                />
                            </Button>
                            <Button onClick={(id) => handleOk(id)}>
                                <img
                                    src={urlImg}
                                    alt="button icon"
                                    width={30}
                                    height={20}
                                />
                            </Button>
                        </td>
                    </tr>
                </>
            )}
        </>
    );
}
