import {createContext,useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
const axios = require("axios").default;

const NewsStateContext=createContext()

function NewsStateProvider (propes){

    const [news,setNews]=useState([])
    const [detailsNews,setDetailsNews]=useState({})
    const navigate=useNavigate()

 useEffect(() => {
    axios
    .get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-18&sortBy=publishedAt&apiKey=01b3f8cd150547d2943473a3d9e12497")
    .then((res) => {
    //  console.log(res.data.articles)
    let ans=[]
    res.data.articles.forEach((i,index)=>{
     ans.push({...i,like:Math.floor(Math.random()*1000),Comment:[],unique:index})
    })
    setNews(ans)
    });
  },[]);


  const detailspage=(data)=>{
    //  console.log(data)
    setDetailsNews(data)
    console.log(detailsNews)
    navigate('/Details')

  }

    return(
        <NewsStateContext.Provider value={{news,detailspage,detailsNews}}>
        {propes.children}
        </NewsStateContext.Provider>
    );
}

export {NewsStateContext , NewsStateProvider}