import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
  let [responseObj, setResponseObj] = useState({})
  const getForecast = () => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY
      }
    })
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
        console.log(process.env.REACT_APP_RAPID_KEY)
        console.log(process.env.REACT_APP_MAP_KEY)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions 
        responseObj={responseObj}
        />
    </div>
  )
}

export default Forecast;