import './Activity.css'
import React,{useContext} from "react";
import { NewsStateContext } from '../Context/NewsContext';
import { Show } from './Show';

export function Activity(){

const {activitys}=useContext(NewsStateContext)

// console.log(activitys.removeNews)

    return(
    <div>
          <h1>Remove Item</h1>
    <div className='RenoveItemBox'>
       {
        activitys.removeNews?.map((item)=>{
            return  <Show img={item.urlToImage} author={item.author} title={item.title} content={item.content} unique={item.unique} url={item.url}/>
        })
       }
    </div>
    <h1>Like Item</h1>
    <div className='RenoveItemBox'>
     
       {
        activitys.likeNews?.map((item)=>{
            return  <Show img={item.urlToImage} author={item.author} title={item.title} content={item.content} unique={item.unique} url={item.url}/>
        })
       }
    </div>
    </div>
  
        
    );
}