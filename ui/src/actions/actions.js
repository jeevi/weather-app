import { FETCH_SEARCH_OPTIONS, FETCH_WEATHER_FOR_WOEID, UNIT_TOGGLE, RESET_WEATHER_DATA_AND_STATUS } from "./actionTypes";

export const fetchWeather = woeid => ({
  type: FETCH_WEATHER_FOR_WOEID,
  woeid,
});

export const fetchSearchOptions = search => ({
  type: FETCH_SEARCH_OPTIONS,
  search,
});

export const onUnitClick = unit => {
  return { type: UNIT_TOGGLE, unit }
};

export const resetWeatherDataAndStatus = () => ({
  type: RESET_WEATHER_DATA_AND_STATUS,
})
