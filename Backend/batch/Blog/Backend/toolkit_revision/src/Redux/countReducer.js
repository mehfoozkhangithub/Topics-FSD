import { createReducer } from '@reduxjs/toolkit';

import * as actionsTypes from './counterActions';

export const myReducer = createReducer({ count: 0 }, (builder) => {
  builder
    .addCase(actionsTypes.countIncrement, (state) => {
      state.count++;
    })
    .addCase(actionsTypes.countDecrement, (state) => {
      state.count--;
    })
    .addCase(actionsTypes.countReset, (state) => {
      state.count = 0;
    });
});
