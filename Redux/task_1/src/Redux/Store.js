import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { Reducer as notificationReducer } from './reducer';

const root = combineReducers({
  notification: notificationReducer,
});

export const myStore = legacy_createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk)),
);
