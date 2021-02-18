import { put, call, takeLatest } from 'redux-saga/effects';
import pick from 'lodash/pick';
import {
  FETCH_SEARCH_OPTIONS,
  FETCH_WEATHER_FOR_WOEID,
  FETCH_SEARCH_OPTIONS_SUCCESS,
  FETCH_SEARCH_OPTIONS_FAILURE,
  FETCH_WEATHER_FOR_WOEID_SUCCESS,
  FETCH_WEATHER_FOR_WOEID_FAILURE,
  FETCH_SEARCH_OPTIONS_IN_PROGRESS,
  FETCH_WEATHER_FOR_WOEID_IN_PROGRESS,
} from './actions/actionTypes';
import {
  fetchSearchOptions,
  fetchWeather,
} from './services';
import { formattedData } from './utils';


function* getSearchOptions(action) {
  const { search } = action;
  yield put({ type: FETCH_SEARCH_OPTIONS_IN_PROGRESS });
  try {
    if (search && search.length) {
      const coordinates = search.split(',');
      let data;
      if (coordinates.length === 2 
            && !Number.isNaN(parseFloat(coordinates[0]))
            && !Number.isNaN(parseFloat(coordinates[1]))) {
        data = yield call(fetchSearchOptions, `lattlong=${search}`);
      } else {
        data = yield call(fetchSearchOptions, `query=${search}`);
      }
      const results = data.data.map(each => pick(each, 'title', 'woeid'));
      yield put({ type: FETCH_SEARCH_OPTIONS_SUCCESS, results });
    } else {
      yield put({ type: FETCH_SEARCH_OPTIONS_FAILURE, error: 'search cannot be an empty string' });
    }
  } catch (error) {
    yield put({ type: FETCH_SEARCH_OPTIONS_FAILURE, error });
  }
};

function* getWeather(action) {
  const { woeid } = action;
  yield put({ type: FETCH_WEATHER_FOR_WOEID_IN_PROGRESS });
  try {
    if (woeid && typeof woeid === 'number') {
      const { data } = yield call(fetchWeather, woeid);
      yield put({ type: FETCH_WEATHER_FOR_WOEID_SUCCESS, data: formattedData(data) });
    } else {
      yield put({ type: FETCH_WEATHER_FOR_WOEID_FAILURE, error: 'woeid must be a number' });
    }
  } catch (error) {
    yield put({ type: FETCH_WEATHER_FOR_WOEID_FAILURE, error });
  }
};

export default function* rootSaga() {
  yield takeLatest(FETCH_SEARCH_OPTIONS, getSearchOptions);
  yield takeLatest(FETCH_WEATHER_FOR_WOEID, getWeather);
};
