import React from 'react'
import './gallery1.css';
import Gallery_1 from '../images/Gallery_1.jpg';
import Gallery_2 from '../images/Gallery_2.jpeg';
import Gallery_3 from '../images/Gallery_3.jpeg';
import Gallery_4 from '../images/Gallery_4.jpeg';
import Gallery_5 from '../images/Gallery_5.jpeg';
import Gallery_7 from '../images/Gallery_7.jpeg';
import Gallery_8 from '../images/Gallery_8.jpeg';
import Gallery_9 from '../images/Gallery_9.jpeg';
import Gallery_10 from '../images/Gallery_10.jpeg';
import Gallery_11 from '../images/Gallery_11.jpeg';
import Gallery_12 from '../images/Gallery_12.jpeg';
import Gallery_13 from '../images/Gallery_13.jpeg';
import Gallery_14 from '../images/Gallery_14.jpeg';
import Gallery_15 from '../images/Gallery_15.jpeg';
import Gallery_16 from '../images/Gallery_16.jpeg';
import Gallery_17 from '../images/Gallery_17.jpeg';
import Gallery_18 from '../images/Gallery_18.jpeg';
import Gallery_19 from '../images/Gallery_19.jpeg';
import WeddingChild from './WeddingChild';
import '../App.css';
function Wedding() {
  return (
    <div>
        <h1 style={{textAlign:"center",color:"yello"}}>Wedding</h1>
      <div className='main' style={{ display: "flex", flexWarp: "wrap" }}>
        
          <WeddingChild img={Gallery_1} />
        <WeddingChild img={Gallery_2} />
        <WeddingChild img={Gallery_3} />
        <WeddingChild img={Gallery_4} />
        <WeddingChild img={Gallery_5} />
       
        <WeddingChild img={Gallery_7} />
        <WeddingChild img={Gallery_8} />
        <WeddingChild img={Gallery_9} />
        <WeddingChild img={Gallery_10} />
        <WeddingChild img={Gallery_11} />
        <WeddingChild img={Gallery_12} />
        <WeddingChild img={Gallery_13} />
        <WeddingChild img={Gallery_14} />
        <WeddingChild img={Gallery_15} />
        <WeddingChild img={Gallery_16} />
        <WeddingChild img={Gallery_17} />
        <WeddingChild img={Gallery_18} />
        <WeddingChild img={Gallery_19} />
        </div>
    </div>
  )
}

export default Wedding;