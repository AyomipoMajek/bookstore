import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const bookList = useSelector((state) => state.books.books);
  return (
    <section className="forBooks">
      {bookList.map((book) => (
        <Book
          key={book.id}
          type={book.type}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
          id={book.id}
        />
      ))}
      <Form />
    </section>
  );
}

export default Books;
