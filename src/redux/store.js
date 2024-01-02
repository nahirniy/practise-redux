import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
