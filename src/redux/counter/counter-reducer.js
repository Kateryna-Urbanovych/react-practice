import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './counter-actions';

const valueReducer = createReducer(0, {
  [actions.increment]: (state, { payload }) => state + payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

// _ когда переменная не используется
const stepReducer = (state = 10, _) => {
  return state;
};

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
