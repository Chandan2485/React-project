import React,{useState,useEffect} from "react";
const axios = require("axios").default;

export function Home(){

const [news,setNews]=useState([])


useEffect(() => {
    axios
    .get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-16&sortBy=publishedAt&apiKey=01b3f8cd150547d2943473a3d9e12497")
    .then((res) => {
    //  console.log(res.data.articles)
    setNews(res.data.articles)
    });
  },[]);

    return(
        <div>CHANDAN</div>
    );
}