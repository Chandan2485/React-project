import React,{useState} from "react"
import 'C:/Users/DELL/Desktop/reactProject/ColorChange/src/Component/ColorToggle/ColorToggle.css';

export function Colortoggle(){
    const [isRed, setIsRed]=useState(true)

    const colorToggles=()=>{
        setIsRed(!isRed)
    }

    return (
        <>
         <h1 className={isRed? 'red':"blue"}>0123456789</h1>
        <button onClick={colorToggles}>Add</button>
        </>
      );
}