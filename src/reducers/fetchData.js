import { Map } from 'immutable';

const initialState = {
  data: {}
}

function fetchData(state = Map(initialState), action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return state.set('data', action.payload);
    default:
      return state;
  }
}

export default fetchData;