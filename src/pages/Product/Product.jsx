import React from "react";
import { useEffect } from "react";
import "../Product/Product.scss";
import "../Product/ProductUtil.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch.js";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { getAddedtoCart } from "../../components/Cart/cart";



const Product = () => {

  const id = useParams().id;

  const [quantity, setquantity] = useState(1);
  const [lockAuth, setLockAuth] = useState(false);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'puzzel') {
        const newValue = e.newValue;
        if (newValue === 'true') {
          window.localStorage.setItem('puzzel', true);
          setLockAuth(true);
        } else {
          window.localStorage.setItem('puzzel', false);
          setLockAuth(false);
        }

      }

    };

    // Add the event listener
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);



  console.log(id);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log(data.attributes.img.data.attributes.url);

  return (
    <div className="product">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="left">
            <div className="mainImg">
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" srcSet="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">$ {data?.attributes?.price * quantity}</span>
            <p>
              {
                data?.attributes?.desc
              }
            </p>


            <div className="quantity">
              <button
                onClick={() =>
                  setquantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setquantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="buttons">
              <button id="wishlist">
                Add To WishList <FontAwesomeIcon icon={faHeart} />
              </button>
              <button id="cart" onClick={
                () => {
                  const key = window.localStorage.getItem('puzzel');
                  if (key == 'true') {
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Product Added to Cart',
                      showConfirmButton: true,
                    });
                    getAddedtoCart(data.id, quantity);
                  } else {
                    Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'First Sign-In',
                      showConfirmButton: true,
                    });
                  }
                }
              }>
                Add To Cart <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
            <div className="buyButton">
              <button>Buy Now</button>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Product;
