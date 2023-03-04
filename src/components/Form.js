import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

function Form() {
  const dispatch = useDispatch();
  const [book, setbook] = useState({ title: '', id: '', author: '' });
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ next: book }));
    setbook({ title: '', id: '', author: '' });
  };

  return (
    <div>
      <form className="addNew" onSubmit={handlesubmit}>
        <h2 className="title">ADD NEW BOOK</h2>
        <input type="text" id="inputBook" value={book.title} placeholder="Book title" onChange={(e) => setbook({ ...book, title: e.target.value, id: Math.floor(Math.random() * 1000) })} />
        <input type="text" id="inputAuthor" value={book.author} placeholder="Book author" onChange={(e) => setbook({ ...book, author: e.target.value })} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
