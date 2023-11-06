import React, { useState } from "react";
import "./Body.css";
import data from "./data.js";
import { BsArrowLeftCircle, BsArrowRightCircle, BsCart3 } from "react-icons/bs";

function Body({ addToCart }) {
  const [slide, setSlide] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addToCartSubmit = () => {
    addToCart(data.displayImages);
  };

  const nextSlide = () => {
    setSlide(slide === data.displayImages.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.displayImages.length - 1 : slide - 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const increase = () => {
    if (quantity < 100) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="bodyContainer">
      <div className="carousel">
        <BsArrowLeftCircle className="arrow arrow-left" onClick={prevSlide} />
        {data.displayImages.map((item, id) => (
          <img
            src={item.image}
            alt="Product Image"
            key="id"
            className={slide === id ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircle className="arrow arrow-right" onClick={nextSlide} />
        <span className="indicatorImage">
          {data.displayImages.map((item, id) => (
            <img
              src={item.thumbnail}
              alt="Product Image"
              onClick={() => setSlide(id)}
              key="id"
              className={
                slide === id
                  ? "thumbnailImage"
                  : "thumbnailImage thumbnail-inactive"
              }
            />
          ))}
        </span>
      </div>

      <div className="cartDetail">
        <h3>sneaker company</h3>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="productDetail">
          These low-profile sneakers are your perfect casual wear companion.
          Feauturing a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="priceDetail">
          <p className="price">$125.00</p>
          <div className="discounttag">
            <p className="discount">50%</p>
          </div>
        </div>
        <p className="priceLine">$250.00</p>
        <div className="regulation">
          <div className="keyReg">
            <button className="regBtn" onClick={decrease}>
              -
            </button>
            <p>{quantity}</p>
            <button className="regBtn" onClick={increase}>
              +
            </button>
          </div>

          <button className="cartBtn" onClick={addToCartSubmit}>
            <BsCart3 className="cartLogo" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
