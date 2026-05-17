import { createAction } from '@reduxjs/toolkit';

export const countIncrement = createAction('counter/increment');
export const countDecrement = createAction('counter/decrement');
export const countReset = createAction('counter/reset');
