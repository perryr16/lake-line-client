import React from 'react';
import { NavLink } from 'react-router-dom';
import TrailById from './TrailByID'


const trail = (props) => {
  // if (props.trailResponse.length > 0) {
  //   const names = props.trailResponse.map(trail => trail.name)
  // }
  // let location = '39.4217,-106.0748'
  let latLons = ""
  return (
    <div>
      {props.trailResponse.length > 0 ?
        <div className="grid-2">
          {props.trailResponse.forEach(trail => latLons+=`${trail.lat},${trail.lon}||`)}
          <img src={`https://www.mapquestapi.com/staticmap/v5/map?locations=${latLons}&key=${process.env.REACT_APP_MAP_KEY}`} alt=""></img>
          <div className="scrollingBox">
            {props.trailResponse.map(trail => 
            <p>
            <NavLink className="trailLink" to={`/trailById/${trail.id}`}>{trail.name}</NavLink> <br/>
            <TrailById
              id={trail.id}
            />
            <a className="trailLink" href={trail.url}>{trail.url}</a> <br></br>
            {trail.length} miles  <br></br>
            {trail.lat}, {trail.lon}
            </p>
            )}
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default trail;

