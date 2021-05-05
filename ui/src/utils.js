import { useRef, useEffect } from 'react';
import { isEqual } from 'lodash';
import { UNIT } from './constants';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getReadableDate = date => {
  const newDate = new Date(date);
  return `${weekdays[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]}`;
}

export const getWeatherImage = icon => `https://www.metaweather.com/static/img/weather/${icon}.svg`;

export const formattedData = data => {
  const { consolidated_weather, title } = data;
  const { 
    created,
    max_temp,
    min_temp,
    predictability,
    ...todayRelevantData
  } = consolidated_weather[0];

  // format today's data
  todayRelevantData.readableDate = getReadableDate(todayRelevantData.applicable_date);
  todayRelevantData.wind_direction = Math.round(todayRelevantData.wind_direction);
  todayRelevantData.wind_speed = todayRelevantData.wind_speed.toPrecision(2);
  todayRelevantData.visibility = Math.round(todayRelevantData.visibility);
  todayRelevantData.the_temp = Math.round(todayRelevantData.the_temp);

  consolidated_weather.shift();

  const futureData = consolidated_weather.map((day, idx) => {

    return {
      min_temp: Math.round(day.min_temp),
      max_temp: Math.round(day.max_temp),
      readableDate: idx ? getReadableDate(day.applicable_date) : 'Tomorrow',
      weather_state_abbr: day.weather_state_abbr,
    }
  });

  return { futureData, todayRelevantData, unit: UNIT.CELCIUS, title };
};

const cToF = temp => Math.round((temp * (9 / 5)) + 32);
const fToC = temp => Math.round((temp - 32) * (5 / 9));

export const toggleUnitOfTemperature = (unit, weather) => {
  const { futureData, todayRelevantData } = weather;

  if (!futureData || !todayRelevantData) {
    return weather;
  }

  todayRelevantData.the_temp = unit === UNIT.FAHRENHEIT ? cToF(todayRelevantData.the_temp) : fToC(todayRelevantData.the_temp);

  futureData.forEach(arr => {
    arr.min_temp = unit === UNIT.FAHRENHEIT ? cToF(arr.min_temp) : fToC(arr.min_temp);
    arr.max_temp = unit === UNIT.FAHRENHEIT ? cToF(arr.max_temp) : fToC(arr.max_temp);
  });

  return { ...weather, futureData, todayRelevantData, unit };
}

export function useDeepEffect(effectFunc, deps) {
  const isFirst = useRef(true);
  const prevDeps = useRef(deps);

  useEffect(() => {
    const isSame = prevDeps.current.every((obj, idx) => isEqual(obj, deps[idx]));
    if (isFirst || !isSame) {
      effectFunc();
    }

    isFirst.current = false;
    prevDeps.current = deps;
  }, deps)
}

export const getUnitAscii = unit => unit === UNIT.CELCIUS? "\u2103" : "\u2109";
