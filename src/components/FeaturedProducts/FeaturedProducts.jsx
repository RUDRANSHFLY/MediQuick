import React from "react";
import "../FeaturedProducts/FeaturedProducts.scss";
import "./FeaturedProductsUtil.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../Loading/Loading.jsx";

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      <h1>Categories</h1>
      <div id="mainDiv">
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
