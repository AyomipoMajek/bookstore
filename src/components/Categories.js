import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkstatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const cate = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const handlecheck = () => {
    dispatch(checkstatus());
  };

  return (
    <div className="all cate">
      <p>{cate}</p>
      <div className="cat">
        <button type="button" onClick={handlecheck}> check status </button>
      </div>

    </div>
  );
}

export default Categories;
