import { render } from '@testing-library/react';
import React from 'react';


const trail = (props) => {
  // console.log('cat')
  // if (props.trailResponse.length > 0) {
  //   const names = props.trailResponse.map(trail => trail.name)
  //   console.log(names)
  // }
  // console.log(props.trailResponse)
  // console.log(props.responseObj[0].name)
  let location = '39.4217,-106.0748'
  let latLons = ""
  return (
    <div>
      {props.trailResponse.length > 1 ?
        <div>
        <p>dog</p>
          {props.trailResponse.forEach(trail =>
          latLons+=`${trail.lat},${trail.lon}||`)}
          {console.log(latLons)}
          <img class="" src={`https://www.mapquestapi.com/staticmap/v5/map?locations=${latLons}&key=${process.env.MAP_KEY}`} alt=""></img>
          {props.trailResponse.map(trail => 
          <p>{trail.name} <br></br>
          {trail.length} miles  <br></br>
          {trail.lat}, {trail.lon}
          </p>
          )}
        
        <p>{JSON.stringify(props.trailResponse[0].name)}</p>
        <p>{props.trailResponse[1].name}</p>
        </div>
        : null
      }
    </div>
  )
}

export default trail;

{/* <img class="" src={`https://www.mapquestapi.com/staticmap/v5/map?locations=${location}8&key=bW5J6NVA1gT64FrRBRViGqTYVcfkUq7F`} alt=""></img> */ }
