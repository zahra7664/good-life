import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../ui-kit/Banner';
import api from '../helpers/api';

function Item() {
  const { id } = useParams();
  const item = api.getItem(id);

  return (
    <div>
      <Banner
        title={item.title}
        subtitle={item.subtitle}
      />
      <article>
        {item.description}
      </article>
    </div>
  )
}

export default Item
