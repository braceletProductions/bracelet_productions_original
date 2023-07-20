import React from 'react'

function Carpetchild(props) {
  return (
    <div>
        <div className="card zoom-container">
            <img 
              src={props.img}
              className="img img-fluid zoom-image"
              alt=""
            />
          </div> 
    </div>
  )
}

export default Carpetchild;