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
    setStorage([])
}

const loginpage=()=>{
    let data=JSON.parse(localStorage.getItem("storage"))
    data.forEach(element => {
        if( element.UserNme===loguserName && element.pass===loguserPass){
            setLogingPage(false)
            setStorage(element)
        }
    });

    setLogUserName('')
    setLogUserPass('')
}

const Register=()=>{
  let data=JSON.parse(localStorage.getItem("storage"))
   let flag=0
  if(userName.length>3 && userPass.length>3){
    data.forEach(element => {
        if( element.UserNme===userName){
            flag++
        }
    });

    if(!flag){
        data.push({
            UserNme:userName,
            pass:userPass
        })
        localStorage.setItem('storage',JSON.stringify(data))
        alert('Register successfully')
    }else{
        alert('Already Register')
    }
  }
  else{
    alert('invlaid username or password')
  }
setUserName('')
setUserPass('')
}

useEffect (()=>{
    localStorage.setItem('storage',JSON.stringify(storage))
},[])



  return (
    <>
    <main>

   
      <div className="header">
        <div>
          <h1>React Login</h1>
        </div>

        <div>
          {logingPage ? (
            <div>
              <button>Login</button>
              <button>New</button>
            </div>
          ) : (
            <div>
              <span>{storage.UserNme}</span>
              <button onClick={page}>Logout</button>
            </div>
          )}
        </div>
      </div>

      {
        logingPage?(
            <div className="new">
            <div>
                <h2>Login</h2>
                <input type="text" 
                 onChange={(e)=>setLogUserName(e.target.value)}
                 value={loguserName}
                />
                <input type="password" name="" id="" 
                 onChange={(e)=>setLogUserPass(e.target.value)}
                 value={loguserPass}
                />
                <button  onClick={loginpage} >Login</button>
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
         ):(<div className="logsucc"><h1>loging successfull</h1></div>)
      } 



      <div className="footer">
        <h2>Login Form @2022</h2>
      </div>



      </main>
    </>
  );
}
