import React from "react";

import { Route, Routes } from "react-router-dom";
import {Home} from "./Component/JS-File/Home";
import { NavbarLogos } from "./Component/JS-File/Navbarlogo";

import { About } from "./Component/JS-File/About";
import Contact from "./Component/JS-File/Contact";
import { Headline } from "./Component/JS-File/Headline";

import {FooterProvider} from "./Component/JS-File/Footer"
import {Activity} from "./Component/Other/Activity";



export  function App() {
  return (
    <>     
     <NavbarLogos/>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Headline" element={<Headline/>}/>
        <Route path="/Activity" element={<Activity/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       <FooterProvider/>
   </>
  );
}


