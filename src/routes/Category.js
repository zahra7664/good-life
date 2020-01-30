import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../ui-kit/Banner';
import Card from '../ui-kit/Card';
import api from '../helpers/api';

function Category() {
  const { id } = useParams();
  const items = api.getCategoryItems(id);

  return (
    <>
      <Banner />

      <main id="main">
        <div className="inner">
          <div className="thumbnails">
            {
              items.map(item => (
                <Card item={item} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default Category;
