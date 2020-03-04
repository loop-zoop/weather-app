import { put, takeLatest, all } from 'redux-saga/effects';
const axios = require('axios');

const api_link = 'api.openweathermap.org'
const api_key = '7c5b7a84b6be691ac0dfce8300fffc8f';
const request_url = `https://${api_link}/data/2.5/weather?q=London&APPID=${api_key}`;

function* fetchData() {
  try {
    let weather_data = yield axios.get(request_url);
    weather_data = yield weather_data.data;
    yield put({type: "FETCH_DATA", payload: weather_data})
  }
  catch (e) {
    console.log(e)
  }
}

function* fetchWathcer() {
  yield takeLatest('FETCH_REQUESTED', fetchData)
}

export default function* rootSaga() {
  yield all([fetchWathcer()])
}