import React from 'react';

const trail = (props) => {
  return (
    <div>
    {/* {console.log(props.responseObj[0].name)} */}
      {props.responseObj ?
        <div>
        <p>dog</p>
        {/* {props.responseObj.forEach(trail =>
          <p>{trail.name}, {trail.id}</p>
        )} */}
        </div>
        : null
      }
    </div>
  )
}

export default trail;