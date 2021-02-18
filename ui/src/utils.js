const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getReadableDate = date => {
  const newDate = new Date(date);
  return `${weekdays[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]}`;
}

export const getWeatherImage = icon => `https://www.metaweather.com/static/img/weather/${icon}.svg`;

export const formattedData = data => {
  /**
   * for snapshot:
   * - min temp
   * - max temp
   * - icon
   * 
   * 
   * for highlights:
   * - wind speed
   * - wind direction
   * - wind_direction_compass
   * 
   * - visibility
   * 
   * - humidity
   * 
   * - air_pressure
   */

  const { consolidated_weather } = data;
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

  return { futureData, todayRelevantData };
};
