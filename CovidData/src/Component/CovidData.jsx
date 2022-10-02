import { useState, useEffect } from "react";
const axios = require("axios").default;
import './CovidData.css';

export function CovidData() {
  const [allData, setAlldata] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((res) => {
        setAlldata(res.data);
      });
  }, []);

  const handleclick = () => {
    for (let val in allData) {
      if (val === input) {
        setStateData(allData[val].total);
      }
    }
  };

  return (
    <div>
      <div className="input_div">
        <input
          placeholder="enter State code"
          onChange={(e) => setinput(e.target.value.toUpperCase())}
          type="text"
        />
        <button onClick={handleclick}>click</button>
      </div>

      <div className="main_div">
        <div className="data_div">
          <div className="confirmed">
            <h1>Confirmed</h1>
            <p>{stateData.confirmed}</p>
          </div>
          <div className="deceased">
            <h1>Deceased</h1>
            <p> {stateData.deceased}</p>
          </div>
          <div className="recovered">
            <h1>Recovered</h1>
            <p> {stateData.recovered}</p>
          </div>
          <div className="tested">
            <h1>Tested</h1>
            <p> {stateData.tested}</p>
          </div>
          <div className="vaccinated1">
            <h1>Vaccinated1</h1>
            <p> {stateData.vaccinated1}</p>
          </div>
          <div className="vaccinated2">
            <h1>Vaccinated2</h1>
            <p> {stateData.vaccinated2}</p>
          </div>
        </div>
       <div className="map_div">
       <img src="" alt="" />
       </div>
       
      </div>
    </div>
  );
}
