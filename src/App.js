import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Books from './components/Books';
// import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Books" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
      <Books />
    </div>
  );
}

export default App;
