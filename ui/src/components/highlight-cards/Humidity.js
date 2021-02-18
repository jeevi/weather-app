import React from 'react';
import PropTypes from 'prop-types';
import Gauge from './Gauge';
import './common.css';

const propTypes = {
  humidity: PropTypes.number.isRequired,
};

const Humidity = ({ humidity }) => {
  
  return (
    <div className="card">
      <p className="title">Humidity</p>
      <div className="inline-data">
        <p className="humidity">{humidity}</p>
        <p className="unit">%</p>
      </div>
      <Gauge value={humidity} />
    </div>
  )
};

Humidity.propTypes = propTypes;

export default Humidity;
