import axios from 'axios';

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location";

export const fetchSearchOptions = query => {
  return axios.get(`${BASE_URL}/search/?${query}`)
    .then(response => response)
    .then(error => error);
}

export const fetchWeather = woeid => {
  return axios.get(`${BASE_URL}/${woeid}`)
    .then(response => response)
    .then(error => error);
}
