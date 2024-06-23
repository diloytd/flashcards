import style from './table.module.scss'
import React, { useState, useEffect } from 'react';
import {ButtonOk, ButtonDelete, ButtonEdit} from './button.jsx'


function Table({date}){
    const [showComponent, setShowComponent] = useState(true);
    useEffect (() => {
        return () => {
            console.log('components deleted')
        }
    }, []);

    const handleClick = () => {
        setShowComponent(false);
      };
return  (
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
           
            {date.map((item, ind) => (
             <tr key={ind} className='block'>
                <td>{ind + 1}</td>
                <td>{item.english}</td>
                <td>{item.transcription}</td>
                <td>{item.russian}</td>
                <div className={style.buttons}>
                    <ButtonDelete onClick={handleClick}/>
                    <ButtonEdit/>
                    <ButtonOk/>
                </div>
            </tr>
            ))
            }
              
            </tbody>
        </table>
    </>
    )
}

export default Table