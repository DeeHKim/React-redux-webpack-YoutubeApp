import Axios from 'axios';
import { UPDATE_LIST } from '../actions/index.js';
import dummyData from '../data/exampleVideoData.js';

const INITIAL_STATE = {videos: dummyData};

export default function(state = INITIAL_STATE, action) {
  console.log("hiiii", INITIAL_STATE);
  switch(action.type) {
    case UPDATE_LIST:
      console.log("newdata", action.payload.data.items);
      return {...state, videos: action.payload.data.items }
    default:
      return state;
  }
}
