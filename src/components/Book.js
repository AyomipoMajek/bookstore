import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import '../styles/Book.css';

const Book = (book) => {
  const dispatch = useDispatch();
  const {
    type, title, author, chapter, id,
  } = book;
  const handledelete = (iden) => {
    dispatch(removeBook({ itemId: iden }));
  };
  return (
    <div className="theBook">
      <div className="aboutBook">
        <h3 className="bookType">{type}</h3>
        <h1 className="bookTitle">{title}</h1>
        <p className="bookAuthor">{author}</p>
      </div>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li>
          <button
            className="optionB"
            onClick={() => { handledelete(id); }}
            onKeyDown={() => { handledelete(id); }}
            type="button"
          >
            Remove
          </button>
        </li>
        <li className="option">Edit</li>
      </ul>
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <h3 className="chapterNo">{chapter}</h3>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
