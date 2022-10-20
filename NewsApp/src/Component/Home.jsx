import './Home.css'
import React,{useContext} from "react";
import { NewsStateContext } from '../Context/NewsContext';


export function Home(){


const {news,detailspage,remove,likebtn}=useContext(NewsStateContext)

// console.log(news)
    return(
        <div className='allNews'>
            {news.map((data)=>{
                return <div className="news" key={data.urlToImage}>
                    <div className='imgdiv'>
                        <img src={data.urlToImage} alt="" />
                    </div>
                    <h2 onClick={()=>detailspage(data)}>{data.title}</h2>
                    <p >{data.content}</p>
                    <div className='icon'>
                    <i class="fa-regular fa-thumbs-up"  onClick={()=>likebtn(data.unique)}><span>{data.like}</span></i>
                    <i class="fa-solid fa-trash"  onClick={()=>remove(data.unique)}></i>
                    <i class="fa-regular fa-comment" onClick={()=>detailspage(data)}><span>{data.Comment.length}</span></i>
                    </div>
                </div>
            })}
        </div>
    );
}