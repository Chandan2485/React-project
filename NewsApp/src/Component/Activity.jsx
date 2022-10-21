import './Activity.css'
import React,{useContext} from "react";
import { NewsStateContext } from '../Context/NewsContext';
import { Show } from './Show';

export function Activity(){

const {activitys}=useContext(NewsStateContext)

// console.log(activitys.removeNews)

    return(
    <div>
    <div className='RenoveItemBox'>
        <h1>Remove Item</h1>
       {
        activitys.removeNews?.map((item)=>{
            return  <Show img={item.urlToImage} author={item.author} title={item.title} content={item.content} unique={item.unique}/>
        })
       }
    </div>

    <div className='RenoveItemBox'>
        <h1>Like Item</h1>
       {
        activitys.likeNews?.map((item)=>{
            return  <Show img={item.urlToImage} author={item.author} title={item.title} content={item.content} unique={item.unique}/>
        })
       }
    </div>
    </div>
  
        
    );
}