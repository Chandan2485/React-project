import React, { useState,useEffect } from "react";
import "./Loging.css";
import "./new.css";
// import { New } from './New';





export function Loging() {
  const [logingPage, setLogingPage] = useState(true);
  const [userName,setUserName]=useState('')
  const [userPass,setUserPass]=useState('')
 const [storage, setStorage] = useState([]);
  const [loguserName,setLogUserName]=useState('')
  const [loguserPass,setLogUserPass]=useState('')
 


const page=()=>{
    setLogingPage(true)
}

const logpag=()=>{
    setLogingPage(false)
}

const Register=()=>{
  let k=localStorage.getItem("storage")
  console.log(k)
}

useEffect (()=>{
    localStorage.setItem('storage',JSON.stringify(storage))
},[])



  return (
    <>
      <div className="header">
        <div>
          <h1>React Loging</h1>
        </div>

        <div>
          {logingPage ? (
            <div>
              <button>Loging</button>
              <button>New</button>
            </div>
          ) : (
            <div>
              <span>CHANDAN</span>
              <button onClick={page}>Logout</button>
            </div>
          )}
        </div>
      </div>



      {
        logingPage?(
            <div className="new">
            <div>
                <h2>Loging</h2>
                <input type="text" 
                 onChange={(e)=>setLogUserName(e.target.value)}
                 value={loguserName}
                />
                <input type="password" name="" id="" 
                 onChange={(e)=>setLogUserPass(e.target.value)}
                 value={loguserPass}
                />
                <button  onClick={logpag} >Loging</button>
            </div>
            <div>
                <h2>Register</h2>
                <input type="text"
                 onChange={(e)=>setUserName(e.target.value)}
                 value={userName}
                 />
                <input type="password" name="" id="" 
                onChange={(e)=>setUserPass(e.target.value)}
                value={userPass}
                />
                <button onClick={Register}>Register</button>
            </div>
          </div>
         ):(<p>loging successfull</p>)
      } 
      
    </>
  );
}
