import React from "react";

export function Show(props){

    let {img,author,title,content,unique,url}=props

    // console.log(img )
       
        return(
                <div className='RenoveItem' key={unique}>
                    <div>
                    <img src={img} alt="" />
                    </div>
                    <p className="author">{author}</p>
                    <h2>{title}</h2>
                    <p className="contentActive">{content}</p>
                    <a href={url}>see more</a>
                </div>
        );
}