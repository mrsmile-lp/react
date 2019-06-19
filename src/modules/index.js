import { combineReducers } from 'redux';

import { getMoviesReducer } from './actions';

const rootReducer = combineReducers({
  actions: getMoviesReducer,
});

export default rootReducer;