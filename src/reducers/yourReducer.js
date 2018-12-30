import {YOUR_TYPES}from '../actions/types';

const initialState = {
  yourContent: []
};

export default function yourReducer(state = initialState ,action) {
  switch (action.type) {
    case YOUR_TYPES:
      return Object.assign({}, state, {yourContent: action.yourContent});
      break;
    default:
      return state;
  }
}
