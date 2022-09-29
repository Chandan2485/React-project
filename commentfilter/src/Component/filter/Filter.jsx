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
 
 const handlechange=(allData1,idata)=>{
    
    const fildata=allData1.filter((com)=>{
        
        return 
    })

    // setfilterData(fildata)
    console.log(fildata)
 }



    return (
        <>
         <div>
            <input type="text"
            value={inputData}
            onChange={(e) =>{
                setinputData(e.target.value)
                handlechange(allData,inputData)
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