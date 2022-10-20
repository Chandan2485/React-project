import {createContext,useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
const axios = require("axios").default;

const NewsStateContext=createContext()

function NewsStateProvider (propes){

    const [news,setNews]=useState([])
    const [detailsNews,setDetailsNews]=useState({})
    const [commentDeta, SetcommentDeta]=useState({})
    const [mode,setMode]=useState(false)


    const navigate=useNavigate()
    

 useEffect(() => {
    axios
    .get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-19&sortBy=publishedAt&apiKey=01b3f8cd150547d2943473a3d9e12497")
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
    // console.log(detailsNews)
    navigate('/Details')

  }

const remove=(id)=>{
// console.log(id)
let afterRemove=news.filter((x)=>{
  return x.unique!==id
})
setNews(afterRemove)
  }
  
 const likebtn=(id)=>{
  console.log(id)
  let afterlike=news.map((x)=>{
    return (x.unique===id)? {...x,like:x.like+1}:x
  })
  setNews(afterlike)
 }

const handelComment=(e)=>{
//  console.log(e.target.value)
SetcommentDeta({comments:e.target.value})
}

const addComment=(id)=>{
  // console.log(commentDeta)
  // console.log(detailsNews)
  let comArr=detailsNews.Comment
  comArr.push(commentDeta)
  setDetailsNews({...detailsNews,Comment:comArr})
  // console.log(detailsNews.Comment)
  // SetcommentDeta({})
  console.log(detailsNews)
  // console.log(id)
}


const changeMode=()=>{
  setMode(!mode)
}


    return(
        <NewsStateContext.Provider value={{news,detailspage,detailsNews,remove,likebtn,handelComment,addComment,changeMode,mode}}>
        {propes.children}
        </NewsStateContext.Provider>
    );
}

export {NewsStateContext , NewsStateProvider}