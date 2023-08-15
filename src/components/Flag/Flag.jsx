import React from "react";
import "./IndianFlag.css";

const IndianFlag = ({ wish }) => {
  return (
    <div className="flag-container">
      <div className="flag">
        <div className="saffron-stripe"></div>
        <div className="white-stripe"></div>
        <div className="green-stripe"></div>

        <img
          className="chakra"
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg"
          alt=""
        />
      </div>
      <h6 className="wish">{wish}</h6>
      </div>
  );
};

export default IndianFlag;
