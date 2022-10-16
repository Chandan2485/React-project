import React,{useState} from "react";
import './Footer.css'

export function Footer (){
    const [date,setDate]=useState(" ")

    // new Date().toLocaleString()
    setInterval(() => {
        setDate(new Date().toLocaleString())
    }, 1000);


    return(
        <div className="footer">
            <div className="copy">
            <i className="fa-solid fa-copyright">Copyright 2022-23</i>
            </div>
            <div className="date">
              <p className="date">{date}</p>
            </div>
            <div className="social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-square-whatsapp"></i>
            </div>
        </div>
    );
}