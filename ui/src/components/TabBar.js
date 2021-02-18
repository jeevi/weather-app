import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchSearchOptions, fetchWeather
} from '../actions/actions';
import './TabBar.css';


const propTypes = {
  searchOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    woeid: PropTypes.number.isRequired,
  })).isRequired,
  fetchSearchOptionsStatus: PropTypes.string.isRequired,
  fetchSearchOptions: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
};

const TabBar = ({
  searchOptions,
  fetchSearchOptions,
  fetchSearchOptionsStatus,
  fetchWeather,
}) => {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleOptionClick = event => {
    setCities([...cities, { title: event.target.textContent, woeid: parseInt(event.target.id) }]);
  };

  const handleCityClick = event => {
    fetchWeather(parseInt(event.target.id));
  };

  return (
    <div className="tabBar">
      <div className="search">
        <div>          
          <input placeholder="search location" onChange={handleChange} value={search}/>
          {searchOptions && searchOptions.length &&
            <div className="popover">
              <ol className="city-list">
                {searchOptions.map(option => <li id={option.woeid} onClick={handleOptionClick}>{option.title}</li>)}
              </ol>
            </div>
          }
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
        
    </div>
  );
};

TabBar.propTypes = propTypes;

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    fetchSearchOptions,
    fetchWeather,
  }, dispatch);

const mapStateToProps = state => ({
  searchOptions: state.searchOptions,
  fetchSearchOptionsStatus: state.fetchSearchOptionsStatus,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabBar);