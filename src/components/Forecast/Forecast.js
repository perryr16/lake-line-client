import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({})
  const getForecast = () => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "cc670b05f4msh6a6e141718aa225p1d2171jsn22e5689cf60b"
      }
    })
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
        // console.log(responseObj)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div class="">
      <h2>Find Current Weather Conditions</h2>
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions 
        responseObj={responseObj}
        />
    </div>
  )
}

export default Forecast;