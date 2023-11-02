import React, { useState } from "react";
import "./Body.css";
import imageProduct from "../images/imageProduct.jpg";
import imageProduct2 from "../images/imageProduct2.jpg";
import imageProduct3 from "../images/imageProduct3.jpg";
import imageProduct4 from "../images/imageProduct4.jpg";
import imageProductThumbnail from "../images/imageProductThumbnail.jpg";
import imageProductThumbnail2 from "../images/imageProductThumbnail2.jpg";
import imageProductThumbnail3 from "../images/imageProductThumbnail3.jpg";
import imageProductThumbnail4 from "../images/imageProductThumbnail4.jpg";
import { BsArrowLeftCircle, BsArrowRightCircle, BsCart3 } from "react-icons/bs";

function Body() {
  const displayImages = [
    {
      id: 0,
      image: imageProduct,
      thumbnail: imageProductThumbnail,
    },
    {
      id: 1,
      image: imageProduct2,
      thumbnail: imageProductThumbnail2,
    },
    {
      id: 2,
      image: imageProduct3,
      thumbnail: imageProductThumbnail3,
    },
    {
      id: 3,
      image: imageProduct4,
      thumbnail: imageProductThumbnail4,
    },
  ];

  const [slide, setSlide] = useState(0);
  const [number, setNumber] = useState(0);

  const nextSlide = () => {
    setSlide(slide === displayImages.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? displayImages.length - 1 : slide - 1);
  };

  return (
    <div className="bodyContainer">
      <div className="carousel">
        <BsArrowLeftCircle className="arrow arrow-left" onClick={prevSlide} />
        {displayImages.map((item, id) => (
          <img
            src={item.image}
            alt="Product Image"
            key="id"
            className={slide === id ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircle className="arrow arrow-right" onClick={nextSlide} />
        <span className="indicatorImage">
          {displayImages.map((item, id) => (
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
            <p className="regBtn">-</p>
            <p>0</p>
            <p className="regBtn">+</p>
          </div>
          <div className="cartBtn">
            <div className="Btn">
              {" "}
              <BsCart3 />
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
