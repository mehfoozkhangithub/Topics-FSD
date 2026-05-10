import { configureStore } from '@reduxjs/toolkit';

import { countSlicer } from '../redux/countSlicer';

export const myStore = configureStore({
  reducer: countSlicer,
});
