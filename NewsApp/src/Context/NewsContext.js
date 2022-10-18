import {createContext,useEffect,useState} from 'react'
const axios = require("axios").default;

const NewsStateContext=createContext()

function NewsStateProvider (propes){

    const [news,setNews]=useState([])


useEffect(() => {
    axios
    .get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=01b3f8cd150547d2943473a3d9e12497")
    .then((res) => {
    //  console.log(res.data.articles)
    setNews(res.data.articles)
    });
  },[]);



    return(
        <NewsStateContext.Provider value={{news}}>
        {propes.children}
        </NewsStateContext.Provider>
    );
}

export {NewsStateContext , NewsStateProvider}