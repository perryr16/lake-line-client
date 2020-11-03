import { render } from '@testing-library/react';
import React from 'react';


const trail = (props) => {
  // if (props.trailResponse.length > 0) {
  //   const names = props.trailResponse.map(trail => trail.name)
  // }
  let location = '39.4217,-106.0748'
  let latLons = ""
  return (
    <div>
      {props.trailResponse.length > 1 ?
        <div>
          {props.trailResponse.forEach(trail => latLons+=`${trail.lat},${trail.lon}||`)}
          <img class="" src={`https://www.mapquestapi.com/staticmap/v5/map?locations=${latLons}&key=${process.env.REACT_APP_MAP_KEY}`} alt=""></img>
          {props.trailResponse.map(trail => 
          <p>{trail.name} <br></br>
          {trail.length} miles  <br></br>
          {trail.lat}, {trail.lon}
          </p>
          )}
        </div>
        : null
      }
    </div>
  )
}

export default trail;

