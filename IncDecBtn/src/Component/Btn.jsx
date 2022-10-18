import React,{useState} from "react";

export function Btn(){
    const [count,setCount]=useState(0)
    const [mode,setMode]=useState(true)

    const inc =()=>{
        if(count<10){
            setCount(count + 1)
        }else{
            setMode(false)
        }
      
    }
    const dec =()=>{
        if(count>0){
            setCount(count - 1)
        }else{
            setMode(true)
        }
    }

   return(
    <div>
        <p>{count}</p>
        {
            mode? 
            (<button onClick={inc}>inc</button>)
            :
            (<button onClick={dec}>dec</button>)
        }
    </div>
   ); 
}