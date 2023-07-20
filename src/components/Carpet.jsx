import React from 'react';
import './gallery1.css';
import Carpetchild from './Carpetchild';
import Gallery_21 from '../images/Gallery_21.jpeg';
import Gallery_22 from '../images/Gallery_22.jpeg';
import Gallery_23 from '../images/Gallery_23.jpeg';
import Gallery_24 from '../images/Gallery_24.jpeg';
import Gallery_25 from '../images/Gallery_25.jpeg';
import Gallery_26 from '../images/Gallery_26.jpeg';
import Gallery_27 from '../images/Gallery_27.jpeg';
import Gallery_28 from '../images/Gallery_28.jpeg';
import Gallery_29 from '../images/Gallery_29.jpeg';
import Gallery_30 from '../images/Gallery_30.jpeg';
import Gallery_31 from '../images/Gallery_31.jpeg';
import Gallery_32 from '../images/Gallery_32.jpeg';
function Carpet() {
  return (
    <div >
      <h1 style={{textAlign:"center",color:"yello"}}>Corporate Events</h1>
      <div className='main' style={{ display: "flex", flexWarp: "wrap" }}>
      <Carpetchild img={Gallery_21} />
        <Carpetchild img={Gallery_22} />
        <Carpetchild img={Gallery_23} />
        <Carpetchild img={Gallery_24} />
        <Carpetchild img={Gallery_25} />
        <Carpetchild img={Gallery_26} />
        <Carpetchild img={Gallery_27} />
        <Carpetchild img={Gallery_28} />
        <Carpetchild img={Gallery_29} />
        <Carpetchild img={Gallery_30} />
        <Carpetchild img={Gallery_31} />
        <Carpetchild img={Gallery_32} />
        </div>
    </div>
  );
}

export default Carpet;
