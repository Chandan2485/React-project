import React,{useReducer} from "react";

const initial ={
    'count':0,
    'mode':true
}

const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        if(state.count<10){
            return{...state,count:state.count + 1}
        }else{
            return{...state,mode:false}
        }
      case "dec":
        if(state.count>0){
            return{...state,count:state.count - 1}
        }else{
            return{...state,mode:true}
        }
      default:
        return state;
    }
  };

export function Btn1(){
    const [counts, dispatch] = useReducer(reducer, initial)
   return(
    <div>
        <p>{counts.count}</p>
        {
            counts.mode? 
            (<button onClick={()=>dispatch({type: "inc"})}>inc</button>)
            :
            (<button onClick={()=>dispatch({type: "dec"})}>dec</button>)
        }
    </div>
   ); 
}