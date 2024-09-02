import style from "./table.module.scss";
import React, {
    useState,
    useContext,
  } from "react";
import Row from "./Row.jsx";
import Sort from "../Sort/Sort.jsx";
import Context from "../Context.js";

function Table() {
const {
    currentState,
    setCurrentState,
    isLoading,
    removeItem,
    postNewWord,
    newWord, 
    setNewWord,
    editWord, changeWord,
    setChangeWord,
    
 } = useContext(Context);
 
    const [sort, setSort] = useState("");
   
    

    const addNewWord = (e) => {
        const { name, value } = e.target;
        const obj = {
            ...newWord,
            [name]: value,
        };
        setNewWord(obj);
    };
    const SelectSort = (sort) => {
        setSort(sort);
        const sortedData = [...currentState].sort((a, b) =>
            a.english.localeCompare(b.english)
        );
        setCurrentState(sortedData);
    };

    // const aaa = (id) => {
    //     editWord(id, () => {
    //         setCurrentState((currentState) =>
    //             currentState.map((item) => (item.id == id ? changeWord : item))
    //         );
    //      })
    // }
    
     return (
        <>
            <div className={style.container}>
                <Sort
                    defaultValue={"Сортировка"}
                    onChange={() => SelectSort(sort)}
                    value={sort}
                    name={"Сортировка слов"}
                />
                <input
                    type="text"
                    name="english"
                    value={newWord.english}
                    onChange={addNewWord}
                />
                <input
                    type="text"
                    name="transcription"
                    value={newWord.transcription}
                    onChange={addNewWord}
                />
                <input
                    type="text"
                    name="russian"
                    value={newWord.russian}
                    onChange={addNewWord}
                />
                <button type="submit" onClick={postNewWord}>
                    Добавить слово{" "}
                </button>
                {isLoading ? (
                    <h1>Load...</h1>
                ) : (
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
                            {currentState.map((item, index) => (
                                <Row
                                    key={item.id}
                                    id={item.id}
                                    english={item.english}
                                    russian={item.russian}
                                    transcription={item.transcription}
                                    removeItem={removeItem}
                                    editWord={editWord}
                                    index={index}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default Table;
