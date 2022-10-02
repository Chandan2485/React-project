import React,{useState,useEffect} from "react"
const axios = require('axios').default;


export function Filter(){
    const [allData, setAlldata]=useState([])
    const [filterData, setfilterData]=useState([])
    const [inputData, setinputData]=useState("")

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=> setAlldata(res.data))
        console.log(allData)
    },[]);
 
 const handlechange=()=>{
    
    const fildata=allData.map((com)=>{
        
        if((com.name).includes(inputData)){
            console.log(com)
            return com
           
        }
    })
    // console.log(fildata)
    // setfilterData(fildata)
    // console.log(filterData)
    
 }



    return (
        <>
         <div>
            <input type="text"
            value={inputData}
            onChange={(e) =>{
                setinputData(e.target.value)
                handlechange()
            }}
            
            />
            <div>
                {
                    allData.map((com)=>{
                        return(
                            <p>{com.name}</p>
                        ) 
                    })
                }
            </div>
         </div>
       
        </>
      );
}