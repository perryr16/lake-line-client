import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import TrailById from './TrailByID'


const Trail = (props, id) => {
  // if (props.trailResponse.length > 0) {
  //   const names = props.trailResponse.map(trail => trail.name)
  // }
  // let location = '39.4217,-106.0748'
  let latLons = ""
  let [trailResponseObj, setTrailResponseObj] = useState({})
  const getTrailById = (event) => {
    fetch(`http://localhost:4000/trails/${id}`, {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => { setTrailResponseObj(response) })
      .catch(err => { console.log(err) });

  }
  
  return (
    <div>
      {props.trailResponse.length > 0 ?
        <div className="grid-2">
          {props.trailResponse.forEach(trail => latLons+=`${trail.lat},${trail.lon}||`)}
          <img className="map-img" src={`https://www.mapquestapi.com/staticmap/v5/map?locations=${latLons}&key=${process.env.REACT_APP_MAP_KEY}`} alt=""></img>
          <div className="scrollingBox">
            {props.trailResponse.map(trail => 
            <p>
              <NavLink className="trailLink big" onClick={getTrailById} to={`/trailById/${trail.id}`}>{trail.name}</NavLink> <br/>
              {/* <TrailById
                id={trail.id}
              /> */}
              <a className="trailLink" href={trail.url}>More Info</a> <br></br>
              <div className="grid-2">
                <div>
                <img className="trailImg" src={trail.imgMedium}></img>
                </div>
                <div className='right'>
                  <span>Distance: </span>{trail.length} miles  <br></br>
                  <span>Location: </span>{trail.location} <br></br>
                  <span>Stars: </span>{trail.stars} <br></br>
                  <span>Ascent: </span>{trail.ascent} ft <br></br>
                  <span>Peak Elevation: </span>{trail.high} ft <br></br>
                  {trail.summary}
                </div>
              </div>
            </p>
            )}
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Trail;

