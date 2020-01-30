import React from 'react';
import Banner from "../ui-kit/Banner";
import Category from '../ui-kit/Category';
import api from '../helpers/api';

function Categories() {
  const categories = api.getCategories();

  return (
    <>
      <Banner />

      <main id="main">
        <div className="inner">
          <div className="thumbnails">
            {
              categories.map(item => (
                <Category item={item} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default Categories;
