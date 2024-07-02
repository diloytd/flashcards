import style from "./card.module.scss";
import { useState, useEffect } from "react";
import Button from "./button";

function Card ({date}) {
    const [click, setClick] = useState(true);
    const [show, setShow] = useState(true);
    
    let random = Math.round(Math.random() * date.length);
    let meaning = date[random] ;
    

    
let handleClick = () => {
    setClick(false);
  } 


return(
        <>
       <div key={meaning.id}className={style.card}>
            <p className={style.word}>{meaning.english}</p>
            <p className={style.transcription}>{meaning.transcription}</p>
            {/* <button onClick={handleClick} style={{display : "block"}}>translate</button> */}
     {click 
     ? <button className={style.btn} onClick={handleClick}>translate</button> : <p>{meaning.russian}</p>
    }
   
      
    </div>
       
    </>
    )
   
}
export default Card

//? <p>{meaning.russian}</p> : <Button/>
//<button onClick={handleClick} style={{display : {handleClick}}}/> 