import './Covid.css'
import React,{ useState, useEffect } from "react";
const axios = require("axios").default;

export function Covid() {
  const [allDate, setAlldate] = useState([]);
  const [allstate, setAllstate] = useState([]);
  const [input, setInput] = useState("");
  const [inputType, setinputType] = useState("state");
  const [filter, setFilter] = useState({});

  useEffect(() => {
    axios.get("https://data.covid19india.org/data.json").then((res) => {
      setAlldate([...res.data.cases_time_series]);
      setAllstate([...res.data.statewise]);
    });
  }, []);

  const clickevent = () => {
    if (inputType === "state") {
      let x = allstate.filter((value) => {
        return value.state.toLowerCase() === input.toLowerCase();
      });
      setFilter(...x);
    } else {
      let y = allDate.filter((value) => {
        return value.dateymd === input;
      });
      setFilter(...y);
    }
  };

  return (
    <div className='main'>
      <div className='input_div'>
        <input 
        className='input'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select name="" id="select" onChange={(e) => setinputType(e.target.value)}>
          <option value="state">State</option>
          <option value="date">Date</option>
        </select>
        <button onClick={clickevent}>Click</button>
      </div>


      <div className='data'>
        {filter.state || filter.dateymd ? (
          filter.state ? (
            <div className='state_data'>
              <div><h1>State</h1><p>{filter.state}</p></div>
              <div><h1>Active</h1><p>{filter.active}</p></div>
              <div><h1>Confirmed</h1><p>{filter.confirmed}</p></div>
              <div><h1>Deaths</h1><p>{filter.deaths}</p></div>
              <div><h1>Deltaconfirmed</h1><p>{filter.deltaconfirmed}</p></div>
              <div><h1>Deltadeaths</h1><p>{filter.deltadeaths}</p></div>
              <div><h1>Deltarecovered</h1><p>{filter.deltarecovered}</p></div>
              <div><h1>Recovered</h1><p>{filter.recovered}</p></div>
            </div>
          ) : (
            <div className='date_data'>
              <div><h1>Date</h1><p>{filter.date}</p></div>
              <div><h1>Dailyconfirmed</h1><p>{filter.dailyconfirmed}</p></div>
              <div><h1>Dailydeceased</h1><p>{filter.dailydeceased}</p></div>
              <div><h1>Dailyrecovered</h1><p>{filter.dailyrecovered}</p></div>
              <div><h1>Totalconfirmed</h1><p>{filter.totalconfirmed}</p></div>
              <div><h1>Totaldeceased</h1><p>{filter.totaldeceased}</p></div>
              <div><h1>Totalrecovered</h1><p>{filter.totalrecovered}</p></div>
            </div>
          )
        ) : (
          <div>
            {/* <img src="./pic/corona.jpg" alt="" /> */}
          </div>
        )}
      </div>
    </div>
  );
}