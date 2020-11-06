import React, {useState} from 'react';

const TrailById = (id) => {
  let [trailResponseObj, setTrailResponseObj] = useState({})
  const getTrailById = (event) => {
    fetch(`http://localhost:4000/trails/${id}`, {
      "method":"GET"
    })
    .then(response => response.json())
    .then(response => {setTrailResponseObj(response)})
    .catch(err => {console.log(err)});

    return (
      <div>
        <p>dog</p>
        <Trail
          trailReponse={trailReponseObj}
        />      
      </div>
    )
  }
}

export default TrailById