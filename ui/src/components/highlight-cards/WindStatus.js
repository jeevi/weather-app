import React from 'react';
import PropTypes from 'prop-types';
import './common.css';
import NavigationIcon from '@material-ui/icons/Navigation';


const propTypes = {
  speed: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  compass: PropTypes.number.isRequired,
};

const WindStatus = ({ speed, direction, compass }) => {
  
  return (
    <div className="card">
      <p className="title">Wind status</p>
      <div className="inline-data">
        <p className="speed">{speed} </p>
        <p className="unit">mph</p>
      </div>
      
      <div className="inline-data">
        <NavigationIcon className="compass" fontSize="large" style={{ transform: `rotate(${direction}deg)` }} />
        <p className="direction">{compass}</p>
      </div>
    </div>
  )
};

WindStatus.propTypes = propTypes;

export default WindStatus;
