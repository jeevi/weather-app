/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  onUnitClick,
} from '../actions/actions';
import {
  FETCH_WEATHER_FOR_WOEID_READY,
  FETCH_WEATHER_FOR_WOEID_IN_PROGRESS,
  FETCH_WEATHER_FOR_WOEID_SUCCESS,
  FETCH_WEATHER_FOR_WOEID_FAILURE,
} from '../actions/actionTypes';
import './Forecast.css';
import FutureSnapshot from './FutureSnapshot';
import AirPressure from './highlight-cards/AirPressure';
import Humidity from './highlight-cards/Humidity';
import Visibility from './highlight-cards/Visibility';
import WindStatus from './highlight-cards/WindStatus';
import { UNIT } from '../constants';


const propTypes = {
  weather: PropTypes.shape({
    futureData: PropTypes.arrayOf(PropTypes.shape({
      min_temp: PropTypes.number.isRequired,
      max_temp: PropTypes.number.isRequired,
      weather_state_abbr: PropTypes.string.isRequired,
      readableDate: PropTypes.string.isRequired,
    })),
    todayRelevantData: PropTypes.shape({
      air_pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      the_temp: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      weather_state_abbr: PropTypes.string.isRequired,
      weather_state_name: PropTypes.string.isRequired,
      wind_direction: PropTypes.number.isRequired,
      wind_direction_compass: PropTypes.string.isRequired,
      wind_speed: PropTypes.number.isRequired,
      readableDate: PropTypes.string.isRequired,
    }),
    unit: PropTypes.oneOf(Object.values(UNIT)),
    title: PropTypes.string,
  }).isRequired,
  fetchWeatherStatus: PropTypes.string.isRequired,
  onUnitClick: PropTypes.func.isRequired,
};

const Forecast = ({
  weather,
  fetchWeatherStatus,
  onUnitClick,
}) => {
  const { futureData, todayRelevantData, unit } = weather;
  if (todayRelevantData) {
    var { air_pressure, humidity, visibility, wind_direction, wind_direction_compass, wind_speed } = todayRelevantData;
  }

  const getBody = () => {
    switch(fetchWeatherStatus) {
      case FETCH_WEATHER_FOR_WOEID_IN_PROGRESS:
        return <CircularProgress className="wait-spinner" size={50} />
      case FETCH_WEATHER_FOR_WOEID_READY:
        return <p className="default-screen">Welcome to the Weather app. Please search and select a city to see its weather forecast.</p>;
      case FETCH_WEATHER_FOR_WOEID_SUCCESS:
        return futureData && futureData.length && todayRelevantData && <div>
                <div className="unit-toggle">
                  <div style={{ display: 'inline-block', marginRight: '20px' }}>
                    <input type="radio" name="toggle-group" value="1" id={UNIT.CELCIUS} checked="checked" onClick={handleOnUnitClick} />
                    <label class="radio" for={UNIT.CELCIUS}>&#8451;</label>
                  </div>
                  <div style={{ display: 'inline-block' }}>
                    <input type="radio" name="toggle-group" value="2" id={UNIT.FAHRENHEIT} onClick={handleOnUnitClick} />
                    <label class="radio" for={UNIT.FAHRENHEIT}>&#8457;</label>
                  </div>
                </div>
                <div className="future">
                  {futureData && futureData.map(each => <FutureSnapshot data={each} unit={unit} />)}
                </div>
                <h2 className="heading">Today's Highlights</h2>
                <div className="highlights">
                  <AirPressure pressure={air_pressure} />
                  <Humidity humidity={humidity} />
                  <Visibility visibility={visibility} />
                  <WindStatus speed={wind_speed} direction={wind_direction} compass={wind_direction_compass} />
                </div>
              </div>;
      case FETCH_WEATHER_FOR_WOEID_FAILURE:
        return <p className="default-screen">Failed to retrieve weather data.</p>
      default:
        break;
    }
  };

  const handleOnUnitClick = event => {
    const { id } = event.target;
    if (id !== unit) {
      onUnitClick(id);
    }
  };

  return (
    <div className="forecast">
      {getBody()}
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
    onUnitClick,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);
