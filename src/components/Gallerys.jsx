import React from 'react';
import './gallery1.css';
import '../App.css';
import {useState } from 'react';
import Wedding from './Wedding';
import Carpet from './Carpet';
function Gallerys() {
const [state, setState] = useState(true);
  return (
    <div className='root'>
           <div className="button-container">
          <button className="carpet-events-button btn" onClick={()=>{setState(false)}}>Corporate Events</button>
         <button className="weddings-button btn" onClick={()=>{setState(true)}}>Wedding </button>
        </div>

          {
             state?<Wedding/>:<Carpet/>
          }
        </div>
  );
}

export default Gallerys;
