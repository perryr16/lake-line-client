import React from 'react';
import { NavLink } from 'react-router-dom';


const trail = (props) => {
  // if (props.trailResponse.length > 0) {
  //   const names = props.trailResponse.map(trail => trail.name)
  // }
  // let location = '39.4217,-106.0748'
  let latLons = ""
  return (
    <div>
      {props.trailResponse.length > 1 ?
        <div className="trailList">
          {props.trailResponse.forEach(trail => latLons+=`${trail.lat},${trail.lon}||`)}
          <img src={`https://www.mapquestapi.com/staticmap/v5/map?locations=${latLons}&key=${process.env.REACT_APP_MAP_KEY}`} alt=""></img>

          {props.trailResponse.map(trail => 
          <p>
          <NavLink className="trailLink" to={`/trails/${trail.id}`}>{trail.name}</NavLink> <br/>
          <a className="trailLink" href={trail.url}>{trail.url}</a> <br></br>
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

