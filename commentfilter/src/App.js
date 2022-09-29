import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

export function App() {
const [count, setcount]=useState(0)
const [color, setColor]=useState(['red','green'])



const add = () => {
  setcount(count+1)
};

  return (
    <>
     <p style={{color:color[count]}}>kjdakjsfgadjaskggggggg</p>
    <button onClick={add}>Add</button>
    </>
   
  );
}

