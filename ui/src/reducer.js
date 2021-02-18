import {
  FETCH_SEARCH_OPTIONS_READY,
  FETCH_SEARCH_OPTIONS_IN_PROGRESS,
  FETCH_SEARCH_OPTIONS_SUCCESS,
  FETCH_SEARCH_OPTIONS_FAILURE,

  FETCH_WEATHER_FOR_WOEID_READY,
  FETCH_WEATHER_FOR_WOEID_IN_PROGRESS,
  FETCH_WEATHER_FOR_WOEID_SUCCESS,
  FETCH_WEATHER_FOR_WOEID_FAILURE,
} from './actions/actionTypes';

const initialState = {
  fetchSearchOptionsStatus: FETCH_SEARCH_OPTIONS_READY,
  fetchWeatherStatus: FETCH_WEATHER_FOR_WOEID_READY,
  weather: {
    futureData:[
      {
        min_temp: 0,
        max_temp: 0,
        weather_state_abbr: '',
        readableDate: '',
      }
    ],
    todayRelevantData: {
      air_pressure: 0,
      humidity: 0,
      id: 0,
      the_temp: 0,
      visibility: 0,
      weather_state_abbr: '',
      weather_state_name: '',
      wind_direction: '',
      wind_direction_compass: '',
      wind_speed: 0,
      readableDate: '',
    },
  },
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
      return { ...state, weather: action.data, fetchSearchOptionsStatus: FETCH_WEATHER_FOR_WOEID_SUCCESS };
    case FETCH_WEATHER_FOR_WOEID_FAILURE:
      return { ...state, weather: [action.error], fetchSearchOptionsStatus: FETCH_WEATHER_FOR_WOEID_FAILURE };
    
    default:
      return state;
  }
};

export default appReducer;
