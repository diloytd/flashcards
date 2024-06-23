import style from './table.module.scss'
import {urlImg, urlImg2, urlImg3} from '../assets/icons.jsx';
export {ButtonOk, ButtonDelete, ButtonEdit}

function ButtonOk(){
    return (
        <>
           <button className="buttonOk">
                <span>
                    <img src={urlImg} alt="#" width={30} height={20}></img>
                </span>
            </button>
        </>
    )
}



function ButtonDelete(){
    return (
        <>
            <button className="buttonDel">
                <span>
                    <img src={urlImg2} alt='Delete Word' width={30} height={20}></img>
                </span>
            </button>
        </>
    )
}


function ButtonEdit(){
    return (
        <>
            <button className="buttonDel">
                <span>
                    <img src={urlImg3} alt='Edit Word' width={30} height={20}></img>
                </span>
            </button>
        </>
    )
}