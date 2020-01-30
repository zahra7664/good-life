import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="box">
      <img className="cover" src={item.cover} alt={item.title} />
      <div className="inner">
        <h3>{item.title}</h3>
        <strong>{item.category}</strong>
        <p>
          {item.subtitle}
        </p>
          <Link className="button fit" to={`/items/${item.id}`}>مطالعه بیشتر</Link>
      </div>
    </div>
  )
}

export default Card;
