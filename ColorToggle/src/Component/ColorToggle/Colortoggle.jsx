import React,{useState} from "react"
import './Colortoggle.css';

export function Colortoggle(){
    const [isRed, setIsRed]=useState(true)

    const colorToggles=()=>{
        setIsRed(!isRed)
    }

    return (
        <>
         <div className={isRed? 'red':"blue"}>
         <button onClick={colorToggles}>Click</button>
         </div>
       
        </>
      );
}