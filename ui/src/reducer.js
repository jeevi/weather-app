import {
  FETCH_SEARCH_OPTIONS_READY,
  FETCH_SEARCH_OPTIONS_IN_PROGRESS,
  FETCH_SEARCH_OPTIONS_SUCCESS,
  FETCH_SEARCH_OPTIONS_FAILURE,

  FETCH_WEATHER_FOR_WOEID_READY,
  FETCH_WEATHER_FOR_WOEID_IN_PROGRESS,
  FETCH_WEATHER_FOR_WOEID_SUCCESS,
  FETCH_WEATHER_FOR_WOEID_FAILURE,

  UNIT_TOGGLE,
  RESET_WEATHER_DATA_AND_STATUS,
} from './actions/actionTypes';

import {
  toggleUnitOfTemperature
} from './utils';


const initialState = {
  fetchSearchOptionsStatus: FETCH_SEARCH_OPTIONS_READY,
  fetchWeatherStatus: FETCH_WEATHER_FOR_WOEID_READY,
  weather: {},
  searchOptions: [],
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SEARCH_OPTIONS_IN_PROGRESS:
      return { ...state, fetchSearchOptionsStatus: FETCH_SEARCH_OPTIONS_IN_PROGRESS };
    case FETCH_SEARCH_OPTIONS_SUCCESS:
      return { ...state, searchOptions: action.results, fetchSearchOptionsStatus: FETCH_SEARCH_OPTIONS_SUCCESS };
    case FETCH_SEARCH_OPTIONS_FAILURE:
      return { ...state, searchOptions: [action.error], fetchSearchOptionsStatus: FETCH_SEARCH_OPTIONS_FAILURE };
    
    case FETCH_WEATHER_FOR_WOEID_IN_PROGRESS:
      return { ...state, fetchWeatherStatus: FETCH_WEATHER_FOR_WOEID_IN_PROGRESS };
    case FETCH_WEATHER_FOR_WOEID_SUCCESS:
      return { ...state, weather: action.data, fetchWeatherStatus: FETCH_WEATHER_FOR_WOEID_SUCCESS };
    case FETCH_WEATHER_FOR_WOEID_FAILURE:
      return { ...state, weather: [action.error], fetchWeatherStatus: FETCH_WEATHER_FOR_WOEID_FAILURE };
    
    case UNIT_TOGGLE:
      return { ...state, weather: toggleUnitOfTemperature(action.unit, state.weather) };
    case RESET_WEATHER_DATA_AND_STATUS:
      return { ...state, fetchWeatherStatus: FETCH_WEATHER_FOR_WOEID_READY, weather: initialState.weather }
    default:
      return state;
  }
};

export default appReducer;
