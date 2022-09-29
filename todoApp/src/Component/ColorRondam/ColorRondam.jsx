import React, { useState } from "react";
import "./ColorRondam.css"

export function ColorRondam() {
    const [color, setColor]=useState('')

    const add = () => {
        setColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
    };
      return (
        <>
         <div style={{backgroundColor:color}}>
         <button onClick={add}>Click</button>
         </div>
        
        </>
      );
    }