import React from 'react';
import PropTypes from 'prop-types';
import './Gauge.css';

const propTypes = {
  value: PropTypes.number.isRequired,
};

const Gauge = ({ value }) => {

  const getPercentage = () => (value * 229) / 100;

  return (
    <div className="guage">
      <div className="numbers">
        <p className="reading">0%</p>
        <p className="reading">50%</p>
        <p className="reading">100%</p>
      </div>
      <div className="filler-guage"></div>
      <div className="filled" style={{ width: `${getPercentage()}px`}}></div>
    </div>
  )
};

Gauge.propTypes = propTypes;

export default Gauge;
