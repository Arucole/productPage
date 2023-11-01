import React from "react";
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

  return (
    <div className="bodyContainer">
      <div className="carousel">
        <BsArrowLeftCircle className="arrow arrow-left" />
        {displayImages.map((item, id) => (
          <img
            src={item.image}
            alt="Product Image"
            key="id"
            className="slide"
          />
        ))}
        <BsArrowRightCircle className="arrow arrow-right" />
        <span className="indicatorImage">
          {displayImages.map((item, id) => (
            <img
              src={item.thumbnail}
              alt="Product Image"
              key="id"
              className="thumbnailImage"
            />
          ))}
        </span>
      </div>

      <div className="cartDetail">
        <h3>sneaker company</h3>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Feauturing a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div>
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <p>$250.00</p>
        <div>
          <div>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
