import React, { useState } from "react";

export function Colorchange() {
    const [count, setcount]=useState(0)
    const color=['red','green','blue','yellow']
    
    const add = () => {
      (count===color.length-1)? setcount(0):setcount(count+1)
      // console.log(count,color[count])
    };
    
      return (
        <>
         <div style={{color:color[count],fontSize:'40px'}}>
         <button onClick={add}>Add</button>
         </div>
      
        </>
       
      );
    }