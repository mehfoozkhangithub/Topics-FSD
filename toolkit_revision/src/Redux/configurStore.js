import { configureStore } from '@reduxjs/toolkit';

import { myReducer } from './countReducer';

export const myStore = configureStore({ reducer: myReducer });
