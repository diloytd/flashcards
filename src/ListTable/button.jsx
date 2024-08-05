import style from './table.module.scss'
import {urlImg, urlImg2, urlImg3} from '../assets/icons.jsx';
export {ButtonOk, ButtonDelete, ButtonEdit}
import { useRef, forwardRef } from 'react';


function ButtonOk ({onClick}) {
    return (
        <>
        <button className="buttonOk" onClick={onClick}>
            <span>
                <img src={urlImg} alt="button icon" width={30} height={20} />
            </span>
        </button>
        </>
    );
};
 


function ButtonDelete({onClick}){
    return (
        <>
            <button className="buttonDel"  onClick={onClick}>
                <span>
                    <img src={urlImg2} alt='Delete Word' width={30} height={20}></img>
                </span>
            </button>
        </>
    )
}


function ButtonEdit({onClick}){
    return (
        <>
            <button className="buttonDel" onClick={onClick}>
                <span>
                    <img src={urlImg3} alt='Edit Word' width={30} height={20}></img>
                </span>
            </button>
        </>
    )
}