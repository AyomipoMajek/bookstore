import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    Books: booksReducer,
    categories: categoriesReducer,
  },
});
