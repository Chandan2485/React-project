import { useState, useEffect } from "react";
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
        return value.state === input;
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
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setinputType(e.target.value)}>
          <option value="state">state</option>
          <option value="date">date</option>
        </select>
        <button onClick={clickevent}>click</button>
      </div>


      <div>
        {filter.state || filter.dateymd ? (
          filter.state ? (
            <div>
              <p>State:{filter.state}</p>
              <p>Active:{filter.active}</p>
              <p>Confirmed:{filter.confirmed}</p>
              <p>Deaths:{filter.deaths}</p>
              <p>Deltaconfirmed:{filter.deltaconfirmed}</p>
              <p>Deltadeaths:{filter.deltadeaths}</p>
              <p>Deltarecovered:{filter.deltarecovered}</p>
              <p>Recovered:{filter.recovered}</p>
            </div>
          ) : (
            <div>
              <p>Date:{filter.date}</p>
              <p>Dailyconfirmed:{filter.dailyconfirmed}</p>
              <p>Dailydeceased:{filter.dailydeceased}</p>
              <p>Dailyrecovered:{filter.dailyrecovered}</p>
              <p>Totalconfirmed:{filter.totalconfirmed}</p>
              <p>Totaldeceased:{filter.totaldeceased}</p>
              <p>Totalrecovered:{filter.totalrecovered}</p>
            </div>
          )
        ) : (
          <p>no covid</p>
        )}
      </div>
    </>
  );
}
