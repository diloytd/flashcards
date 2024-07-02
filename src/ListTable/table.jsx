import style from "./table.module.scss";
import React, { useState, useEffect } from "react";
import { ButtonOk, ButtonDelete, ButtonEdit } from "./button.jsx";

function Table({date}) {
    const [showComponent, setShowComponent] = useState(true);
    const [editIndex, setEditIndex] = useState(null);
    const handleClick = (index) => {
        let current = [...date];
       setEditIndex(index);
       handleComponent(index)
    };
    const handleComponent = () => {
        setShowComponent(!showComponent)
    }

    return (
        <>
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
                 {date.map((item, index) => (
                    <tr key={index} className="block">
                       <td>{index + 1}</td>
                       {showComponent ? 
                       <>
                        <td>{item.english}</td>
                        <td>{item.transcription}</td>
                        <td>{item.russian}</td>
                        <div className={style.buttons}>
                            <ButtonDelete />
                            <button onClick={() => handleClick(index) } style={{width: '20px'}} />
                            {editIndex == index &&  setShowComponent }
                            <ButtonOk />
                        </div> 
                        </>
                        :
                       <div className="row">
                        <input placeholder={item.english}></input>
                        <input placeholder={item.transcription}></input>
                        <input placeholder={item.russian}></input>
                        </div>
                        }
                       </tr>
                    ))
                }   
                       
                    
                </tbody>
            </table>
        </>
    );
}

export default Table;
