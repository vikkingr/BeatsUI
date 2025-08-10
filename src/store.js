import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import beatReducer from './slices/beatSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    beats: beatReducer,
  },
});

export default store;
