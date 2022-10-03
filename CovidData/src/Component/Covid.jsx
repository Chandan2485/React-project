import { useState, useEffect } from "react";
const axios = require("axios").default;

export function Covid(){

  const [allDate,setAlldate]=useState([])
  const [allstate,setAllstate]=useState([])

  const [input,setInput]=useState("")
  const [inputType,setinputType]=useState("state")

  const [filter,setFilter]=useState({})


  useEffect(()=>{

    axios.
    get('https://data.covid19india.org/data.json')
    .then((res)=> {
        setAlldate([...res.data.cases_time_series])
        setAllstate([...res.data.statewise])
        console.log(res.data.statewise)
        console.log(res.data.cases_time_series)
    })

  },[])


const clickevent=()=>{
    if(inputType==="state"){
        let x=allstate.filter((value)=>{
            return value.state===input
        })
        console.log(x)
        setFilter(...x)
    }else{
        let y=allDate.filter((value)=>{
            return value.dateymd===input
        })
        console.log(y)
        setFilter(...y)
    }
    
}



    return(
        <>
        <div>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <select name="" id="" onChange={(e)=>setinputType(e.target.value)}>
                <option value="state">state</option>
                <option value="date">date</option>
            </select>
            <button onClick={clickevent}>click</button>
        </div>
          <div>
           { (filter.state)?
           <div>
            <p>{filter.state}</p>
          <p>{filter.active}</p>
          <p>{filter.confirmed}</p>
          <p>{filter.deaths}</p>
          <p>{filter.deltaconfirmed}</p>
          <p>{filter.deltadeaths}</p>
          <p>{filter.deltarecovered}</p>
          <p>{filter.recovered}</p>
           </div>:
           <div>
            <p>{filter.date}</p>
           </div>
         
        }
          </div>
         
        </>
      

    );

}