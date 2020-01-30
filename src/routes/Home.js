import React from 'react';
import Banner from "../ui-kit/Banner";
import Card from '../ui-kit/Card';
import api from '../helpers/api';

function Home() {
  const items = api.getItems();

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

export default Home;
