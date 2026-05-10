import { configureStore } from '@reduxjs/toolkit';
import { todoSlicerReducer } from '../Slicer/todoSlice';

export const myStore = configureStore({
  reducer: todoSlicerReducer,
});
