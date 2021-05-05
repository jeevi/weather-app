import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  fetchSearchOptions, fetchWeather, resetWeatherDataAndStatus
} from '../actions/actions';
import {
  FETCH_WEATHER_FOR_WOEID_READY,
  FETCH_WEATHER_FOR_WOEID_IN_PROGRESS,
  FETCH_WEATHER_FOR_WOEID_SUCCESS,
  FETCH_WEATHER_FOR_WOEID_FAILURE,
  FETCH_SEARCH_OPTIONS_READY,
  FETCH_SEARCH_OPTIONS_IN_PROGRESS,
  FETCH_SEARCH_OPTIONS_SUCCESS,
  FETCH_SEARCH_OPTIONS_FAILURE,
} from '../actions/actionTypes';
import './TabBar.css';
import { Fragment } from 'react';
import { getUnitAscii, getWeatherImage } from '../utils';


const propTypes = {
  searchOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    woeid: PropTypes.number.isRequired,
  })).isRequired,
  fetchSearchOptionsStatus: PropTypes.string.isRequired,
  fetchSearchOptions: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
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
  }).isRequired,
  fetchWeatherStatus: PropTypes.string.isRequired,
  resetWeatherDataAndStatus: PropTypes.func.isRequired,
};

const TabBar = ({
  searchOptions,
  fetchSearchOptions,
  fetchSearchOptionsStatus,
  fetchWeather,
  weather,
  fetchWeatherStatus,
  resetWeatherDataAndStatus,
}) => {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleOptionClick = event => {
    const { id, textContent } = event.target;
    if (cities.findIndex(city => city.woeid == id) === -1) {
      setCities([...cities, { title: textContent, woeid: parseInt(id, 10) }]);
    }
  };

  const handleCityClick = event => {
    fetchWeather(parseInt(event.target.id, 10));
  };

  const getSearchBody = () => {
    switch(fetchSearchOptionsStatus) {
      case FETCH_SEARCH_OPTIONS_READY:
        return <p>Enter name of city or co-ordinates</p>
      case FETCH_SEARCH_OPTIONS_IN_PROGRESS:
        return <CircularProgress className="wait-spinner" size={25} />
      case FETCH_SEARCH_OPTIONS_SUCCESS:
        return searchOptions && searchOptions.length && 
          <ol className="city-list">
            {searchOptions.map(option => <li id={option.woeid} onClick={handleOptionClick}>{option.title}</li>)}
          </ol>
      case FETCH_SEARCH_OPTIONS_FAILURE:
        return <p>Failed to retrieve search options</p>
      default:
        break;
    }
  };

  const getBody = () => {
    switch(fetchWeatherStatus) {
      case FETCH_WEATHER_FOR_WOEID_IN_PROGRESS:
        return <CircularProgress className="wait-spinner" size={50} />;
      case FETCH_WEATHER_FOR_WOEID_READY:
        return <Fragment>
          <div className="search">
            <div>          
              <input placeholder="search location" onChange={handleChange} value={search}/>
                <div className="popover">
                  {getSearchBody()}
                </div>
            </div>
            <button className="search-btn" onClick={() => fetchSearchOptions(search)}>
              Search
            </button>
          </div>

          <div className="cities">
              {cities.map(city => 
                <button id={city.woeid} className="city" onClick={handleCityClick}>
                  {city.title}
                </button>
              )}
          </div>
        </Fragment>;
      case FETCH_WEATHER_FOR_WOEID_SUCCESS:
        return <div className="today-weather">
                <button class="go-back-btn" onClick={() => resetWeatherDataAndStatus()}>Go back</button>
                <img src={getWeatherImage(weather.todayRelevantData.weather_state_abbr)} alt="pic" className="today-weather-image"/>
                <div className="today-inline-data">
                  <p className="today-temp">{weather.todayRelevantData.the_temp}</p>
                  <p className="today-unit">{getUnitAscii(weather.unit)}</p>
                </div>
                <p className="today-weather-state">{weather.todayRelevantData.weather_state_name}</p>
                <div className="footer-text">
                  <p style={{ marginRight: '5px' }}>Today</p>
                  <p style={{ marginRight: '5px' }}>.</p>
                  <p>{weather.todayRelevantData.readableDate}</p>
                </div>
                <div className="footer-text">
                  <p>{weather.title}</p>
                </div>
              </div>;
      case FETCH_WEATHER_FOR_WOEID_FAILURE:
        return <p className="default-screen">Failed to retrieve weather data.</p>
      default:
        break;
    }
  };

  return (
    <div className="tabBar">
      {getBody()}
    </div>
  );
};

TabBar.propTypes = propTypes;

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    fetchSearchOptions,
    fetchWeather,
    resetWeatherDataAndStatus,
  }, dispatch);

const mapStateToProps = state => ({
  searchOptions: state.searchOptions,
  fetchSearchOptionsStatus: state.fetchSearchOptionsStatus,
  fetchWeatherStatus: state.fetchWeatherStatus,
  weather: state.weather,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabBar);
