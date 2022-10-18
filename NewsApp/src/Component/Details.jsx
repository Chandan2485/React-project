import React,{useContext} from "react";
import { NewsStateContext } from '../Context/NewsContext';



export function Details(){

    const {detailsNews}=useContext(NewsStateContext)


    return(
        <div className="detailsNews">
             <div className="detailsNews_img">
             <img src={detailsNews.urlToImage} alt="" />
             </div>
             <h2>{detailsNews.title}</h2>
             <p >{detailsNews.content}</p>
        </div>
       
    );
}