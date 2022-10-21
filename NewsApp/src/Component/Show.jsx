import React from "react";

export function Show(props){

    let {img,author,title,content,unique}=props

    // console.log(img )
       
        return(
                <div className='RenoveItem' key={unique}>
                    <div>
                    <img src={img} alt="" />
                    </div>
                    <p>{author}</p>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
        );
}