const Book = (book) => {
  const { type, title, author } = book;
  return (
    <div className="theBook">
      <h3 className="bookType">{type}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li className="option">Remove</li>
        <li className="option">Edit</li>
      </ul>
      {/* <div className="level">
        <div>Circle</div>
        <div>
          <h2>{bookData.percent}</h2>
          <h4>{bookData.status}</h4>
        </div>
      </div>
      <div className="chapterDetails">
        <h2 className="chapterNum">CURRENT CHAPTER</h2>
        <h3>{bookData.lastChapter}</h3>
        <button type="submit">UPDATE PROGRESS</button>
      </div> */}
    </div>
  );
};

export default Book;
