import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
const {REACT_APP_RAPID_KEY} = process.env
const {REACT_APP_MAP_KEY} = process.env


const Forecast = () => {
  let [city, setCity] = useState('');
  let [unit, setUnit] = useState('imperial');
  let [responseObj, setResponseObj] = useState({});
  let env = process.env.NODE_ENV
  let mapx = process.env.REACT_APP_MAP_KEY
  let rapid_key = process.env.REACT_APP_RAPID_KEY
  // const uriEncodedCity = encodeURIComponent(city);
  const getForecast = (event) => {
    event.preventDefault()
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=${unit}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": rapid_key
      }
    })
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className='content'>
      <h2>Find Current Weather Conditions</h2>
      {/* <button onClick={getForecast}>Get Forecast</button> */}
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        /><br></br>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(event) => setUnit(event.target.value)}
          />
                    Fahrenheit
                </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(event) => setUnit(event.target.value)}
          />
                    Celcius
        </label><br></br>
        <input type="submit" value="Get Forecast"/>
      </form>
      <Conditions 
        responseObj={responseObj}
        />
    </div>
  )
}

export default Forecast;