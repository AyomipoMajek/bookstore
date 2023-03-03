import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q2vJ7mN9IENuKzD4CjC7/books');
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async ({ appId, book }) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
  const data = {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  };
  const response = await axios.post(url, data);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q2vJ7mN9IENuKzD4CjC7/books/${itemId}`);
  return itemId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, () => ({ status: 'loading' }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        status: 'succeeded',
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        books: [...state.books, action.payload],
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        books: state.books.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export default bookSlice.reducer;
