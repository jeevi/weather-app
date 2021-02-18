import React from 'react';
import PropTypes from 'prop-types';
import './common.css';

const propTypes = {
  visibility: PropTypes.number.isRequired,
};

const Visibility = ({ visibility }) => {
  
  return (
    <div className="card">
      <p className="title">Visibility</p>
      <div className="inline-data">
        <p className="visibility">{visibility} </p>
        <p className="unit">miles</p>
      </div>
    </div>
  )
};

Visibility.propTypes = propTypes;

export default Visibility;
