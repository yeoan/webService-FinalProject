import {YOUR_TYPES, SET_UID, SET_EMAIL}from '../actions/types';

export const yourAction = (anyNumber) => {
  return {
    type : YOUR_TYPES,
    yourContent : anyNumber
  };
};

export const setUid = (anyNumber) => {
  return {
    type : SET_UID,
    yourContent : anyNumber
  };
};

export const setEmail = (anyString) => {
  return {
    type : SET_EMAIL,
    yourContent : anyString
  };
};
