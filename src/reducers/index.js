import {combineReducers} from 'redux';

import searchReducer from './reducer_search.js';

import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  videos: searchReducer
});

export default rootReducer;
