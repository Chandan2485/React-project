import React,{useContext} from "react";
import { NewsStateContext } from '../Context/NewsContext';
import './Details.css'



export function Details(){

    const {detailsNews,handelComment,addComment}=useContext(NewsStateContext)

    const content=(xyz)=>{
        let contents="";
        for(let i=0;i<50;i++){
            contents+=xyz
        }
        return contents
    }
    

  

    return(
        <div className="detailsNews">
             <div className="detailsNews_img">
             <img src={detailsNews.urlToImage} alt="" />
             </div>
             <div className="sourse">
                <p>{detailsNews.publishedAt}</p>
                <p>Author: {detailsNews.author}</p>
                {/* <p>Cradit: {detailsNews.source.name}</p> */}
             </div>
             <h2>{detailsNews.title}</h2>
             <p className="content">{content(detailsNews.content)}</p>
             <div>
                <textarea name="" id="" cols="100" rows="7" onChange={(e)=>{handelComment(e)}}></textarea>
                <div><button onClick={()=>{addComment(detailsNews.unique)}}>Comment</button></div>
             </div>
             <div className="commentBlock">
                {
                    detailsNews.Comment?.map((com)=>{
                        return (
                            <p><i class="fa-regular fa-comments"></i>{com.comments}</p>
                        )
                    })
                }
             </div>
        </div>
       
    );
}