import React from 'react';
import { Link } from 'react-router-dom';

function Category({ item }) {
  return (
    <div className="box">
      <div className="inner">
        <h3>{item.title}</h3>
        <Link
          className="button fit"
          to={`categories/${item.id}`}
        >
          مشاهده مقالات
        </Link>
      </div>
    </div>
  )
}

export default Category;
