import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchWeather,
  fetchSearchOptions,
} from '../actions/actions';
import './Forecast.css';
import FutureSnapshot from './FutureSnapshot';
import AirPressure from './highlight-cards/AirPressure';
import Humidity from './highlight-cards/Humidity';
import Visibility from './highlight-cards/Visibility';
import WindStatus from './highlight-cards/WindStatus';


const propTypes = {
  weather: PropTypes.shape({
    futureData: PropTypes.arrayOf(PropTypes.shape({
      min_temp: PropTypes.number.isRequired,
      max_temp: PropTypes.number.isRequired,
      weather_state_abbr: PropTypes.string.isRequired,
      readableDate: PropTypes.string.isRequired,
    })).isRequired,
    todayRelevantData: PropTypes.shape({
      air_pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      the_temp: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      weather_state_abbr: PropTypes.string.isRequired,
      weather_state_name: PropTypes.string.isRequired,
      wind_direction: PropTypes.string.isRequired,
      wind_direction_compass: PropTypes.string.isRequired,
      wind_speed: PropTypes.number.isRequired,
      readableDate: PropTypes.string.isRequired,
    }),
  }).isRequired,
  fetchWeatherStatus: PropTypes.string.isRequired,
  fetchWeather: PropTypes.func.isRequired,
};

const Forecast = ({
  woeid,
  weather,
  fetchWeatherStatus,
  fetchWeather,
}) => {
  console.log(weather, 'weather');
  const { futureData, todayRelevantData } = weather;
  const { air_pressure, humidity, visibility, wind_direction, wind_direction_compass, wind_speed, ...otherData } = todayRelevantData;
  return (
    <div className="forecast">
        <div className="future">
          {futureData && futureData.map(each => <FutureSnapshot data={each} />)}
        </div>
        <h2 className="heading">Today's Highlights</h2>
        <div className="highlights">
          <AirPressure pressure={air_pressure} />
          <Humidity humidity={humidity} />
          <Visibility visibility={visibility} />
          <WindStatus speed={wind_speed} direction={wind_direction} compass={wind_direction_compass} />
        </div>
    </div>
  );
};

Forecast.propTypes = propTypes;

const mapStateToProps = state => ({
  weather: state.weather,
  fetchWeatherStatus: state.fetchWeatherStatus,
});


const mapDispatchToProps = dispatch => 
  bindActionCreators({
    fetchSearchOptions,
    fetchWeather,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);
