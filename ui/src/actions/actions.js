import { FETCH_SEARCH_OPTIONS, FETCH_WEATHER_FOR_WOEID } from "./actionTypes";

export const fetchWeather = woeid => ({
  type: FETCH_WEATHER_FOR_WOEID,
  woeid,
});

export const fetchSearchOptions = search => ({
  type: FETCH_SEARCH_OPTIONS,
  search,
});
