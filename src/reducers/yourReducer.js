import {YOUR_TYPES, SET_UID, SET_EMAIL}from '../actions/types';

const initialState = {
  yourContent: [],
  uId: 0,
  email: ''
};

export default function yourReducer(state = initialState ,action) {
  switch (action.type) {
    case YOUR_TYPES:
      return Object.assign({}, state, {yourContent: action.yourContent});
      break;
    case SET_UID:
      return Object.assign({}, state, {uId: action.yourContent});
      break;
    case SET_EMAIL:
      return Object.assign({}, state, {email: action.yourContent});
      break;
    default:
      return state;
  }
}
