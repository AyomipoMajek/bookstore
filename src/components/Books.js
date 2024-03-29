import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/bookSlice';
import Book from './Book';
import Form from './Form';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const bookList = useSelector((state) => state.Books.books);
  return (
    <section className="forBooks">
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          type={book.type}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
          id={book.item_id}
        />
      ))}
      <Form />
    </section>
  );
}

export default Books;
