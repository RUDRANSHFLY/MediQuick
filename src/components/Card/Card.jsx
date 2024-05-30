import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.scss";
import "./CardUtil.scss";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img
            src={item.attributes.img.data.attributes.url}
            className="mainImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.attributes.price + 20}</h3>
          <h3>${item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
