import { combineReducers } from 'redux';
import counterTypes from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case counterTypes.INCREMENT:
      return state + payload;

    case counterTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

// _ когда переменная не используется
const stepReducer = (state = 10, _) => {
  return state;
};

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
