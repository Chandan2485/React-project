import React from "react";
import "./Header.css"

export function Header() {
    return(
        <div>
       <div className="header">
        <div className="logo">NewsApp</div>
        <div className="menu">
             <a >Home</a>
            <a >About</a>
            <a >Contact</a>
        </div>
        <div className="ModeChange">
            <input type="text" />
            <button className="SearchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
            <i className="fa-regular fa-moon"></i>
        </div>
       </div>
       </div>
    );
}