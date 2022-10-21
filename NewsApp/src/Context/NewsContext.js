import {createContext,useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
const axios = require("axios").default;

const NewsStateContext=createContext()

function NewsStateProvider (propes){

    const [news,setNews]=useState([])
    const [detailsNews,setDetailsNews]=useState({})
    const [commentDeta, SetcommentDeta]=useState({})
    const [mode,setMode]=useState(false)
    const [searchValue,setSearchValue]=useState("")
    const [activitys,setactivitys]=useState({
      'likeNews':[],
      'removeNews':[],
    })



    const navigate=useNavigate()
    

 useEffect(() => {
    axios
    .get(" https://newsapi.org/v2/everything?q=tesla&from=2022-09-20&sortBy=publishedAt&apiKey=01b3f8cd150547d2943473a3d9e12497")
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

const remove=(id,item)=>{
// console.log(id)
let afterRemove=news.filter((x)=>{
  return x.unique!==id
})
setNews(afterRemove)
let removeItem=activitys.removeNews
removeItem.push(item)
setactivitys({...activitys,removeNews:removeItem})
// console.log(activitys)
}
  
 const likebtn=(id,item)=>{
  // console.log(item)
  let afterlike=news.map((x)=>{
    return (x.unique===id)? {...x,like:x.like+1}:x
  })
  setNews(afterlike)
  let likeItem=activitys.likeNews
  likeItem.push(item)
  setactivitys({...activitys,likeNews:likeItem})
  // console.log(activitys.likeNews)
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
  // console.log(detailsNews)
  // console.log(id)
}


const changeMode=()=>{
  setMode(!mode)
}

const searchChange=(e)=>{
  setSearchValue(e.target.value)
// console.log(searchValue)
}

const handleSearch=()=>{
  axios
  .get(`https://newsapi.org/v2/everything?q=${searchValue}&from=2022-09-20&sortBy=publishedAt&apiKey=01b3f8cd150547d2943473a3d9e12497`)
  .then((res) => {
  //  console.log(res.data.articles)
  let ans=[]
  res.data.articles.forEach((i,index)=>{
   ans.push({...i,like:Math.floor(Math.random()*1000),Comment:[],unique:index})
  })
  setNews(ans)
  // console.log(news)
  });
  setSearchValue('')
}

    return(
        <NewsStateContext.Provider value={{news,detailspage,detailsNews,remove,likebtn,handelComment,addComment,changeMode,mode,searchValue,searchChange,handleSearch,activitys}}>
        {propes.children}
        </NewsStateContext.Provider>
    );
}

export {NewsStateContext , NewsStateProvider}