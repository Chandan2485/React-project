import React, { useState } from "react";
import "./Loging.css";
import { New } from './New';





export function Loging() {
  const [logingPage, setLogingPage] = useState(true);
  // const [newUser,setNewUser]=useState(true)
  //   const [logOutPage, setLogOutPage] = useState(false);
  // const [userName,setUserName]=useState(true)

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
              <button>Logout</button>
            </div>
          )}
        </div>
      </div>
      <New/>
    </>
  );
}
