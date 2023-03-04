import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => { state.books.push(action.payload.next); },
    removeBook: (state, action) => (
      { books: state.books.filter((book) => book.id !== action.payload.id) }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
