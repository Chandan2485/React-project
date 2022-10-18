import './Home.css'
import React,{useContext} from "react";
import { NewsStateContext } from '../Context/NewsContext';


export function Home(){


const {news}=useContext(NewsStateContext)

// console.log(news)
    return(
        <div className='allNews'>
            {news.map((data)=>{
                return <div className="news">
                    <div><img src={data.urlToImage} alt="" /></div>
                    <div className='source'>
                        <p>{data.publishedAt}</p>
                        <p>Author:  {data.author}</p>
                        <p>Cradit:  {data.source.name}</p>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.content}<span><a href={data.url}>more</a></span></p>
                    <div className='icon'>
                    <i class="fa-regular fa-thumbs-up"></i>
                    <i class="fa-regular fa-comment"></i>
                    </div>
                </div>
            })}
        </div>
    );
}