import React from 'react'

function WeddingChild(props) {
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

export default WeddingChild;