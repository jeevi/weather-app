import React from 'react';
import PropTypes from 'prop-types';
import './common.css';

const propTypes = {
  pressure: PropTypes.number.isRequired,
};

const AirPressure = ({ pressure }) => {
  
  return (
    <div className="card">
      <p className="title">Air Pressure</p>
      <div className="inline-data">
        <p className="pressure">{pressure} </p>
        <p className="unit">mb</p>
      </div>
    </div>
  )
};

AirPressure.propTypes = propTypes;

export default AirPressure;
