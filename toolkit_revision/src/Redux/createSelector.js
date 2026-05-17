import { createSelector } from '@reduxjs/toolkit';

const state = (data) => data;

export const stateValue = createSelector([state], (state) => {
  return state.count;
});
