import React from 'react';
import PropTypes from 'prop-types';
import { getWeatherImage } from '../utils';
import './FutureSnapshot.css';

const propTypes = {
  data: PropTypes.shape({
    min_temp: PropTypes.number.isRequired,
    max_temp: PropTypes.number.isRequired,
    weather_state_abbr: PropTypes.string.isRequired,
    readableDate: PropTypes.string.isRequired,
  }).isRequired,
};

const Snapshot = ({ data }) => {
  
  return (
    <div className="snapshot">
      <p className="future-date">{data.readableDate}</p>
      <img src={getWeatherImage(data.weather_state_abbr)} alt="pic" className="weather-image"/>
      <div className="temperatures">
        <p className="max-temp">{data.max_temp}&#8451;</p>
        <p className="min-temp">{data.min_temp}&#8451;</p>
      </div>
    </div>
  )
};

Snapshot.propTypes = propTypes;

export default Snapshot;
