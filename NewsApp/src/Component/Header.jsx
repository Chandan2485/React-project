import React from "react";
import "./Header.css"
import {Link} from 'react-router-dom'

export function Header() {
    return(
        <>
       <div className="header">
        <div className="logo">NewsApp</div>
        <div className="menu">
            <Link to={'/'}>Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'Contact'}>Contact</Link>
        </div>
        <div className="ModeChange">
            <input type="text" />
            <button className="SearchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
            <i className="fa-regular fa-moon"></i>
        </div>
       </div>
       </>
    );
}