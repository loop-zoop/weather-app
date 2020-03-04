import { combineReducers } from 'redux';
import fetchData from './fetchData';
import { ReduxHelper } from 'obrigado-redux-utils';
import { data } from '../data';
import storage from 'redux-persist/lib/storage'

export const rHelper = new ReduxHelper(data);
const generatedReducers = rHelper.generateReducers();
export const persistedReducer = rHelper.generatePersistsReducers(storage,['user','posts'], {fetchData})

///////////
const rootReducer = combineReducers({
  ...generatedReducers,
  fetchData
})

export default rootReducer;
