import React, { useState } from "react";
import "./Detail.css";
function Detail(props) {
  let { title, price, imageUrl } = props;
  return (
    <>
      <div className="container sarim">
        <div className="single-product">
          <div className="row sam">
            <div className="col-6">
              <div className="product-image">
                <div className="product-image-main">
                  <img src="img/tshirt-1.png" alt="" id="product-main-image" />
                </div>
                <div className="product-image-slider">
                  <img src={imageUrl} alt="" className="image-list" />
                  <img src="img/tshirt-2.png" alt="" className="image-list" />
                  <img src="img/tshirt-3.png" alt="" className="image-list" />
                  <img
                    src="img/tshirt-group.png"
                    alt=""
                    className="image-list"
                  />
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-title">
                <h2>{title}</h2>
              </div>
              <div className="product-rating">
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span className="review">(47 Review)</span>
              </div>
              <div className="product-price">
                <span className="offer-price">{price}</span>
                <span className="sale-price">$129.00</span>
              </div>

              <div className="product-details">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  est magnam quibusdam maiores sit perferendis minima cupiditate
                  iusto earum repudiandae maxime vitae nostrum, ea cumque iste
                  ipsa hic commodi tempore.
                </p>
              </div>
              <div className="product-size">
                <h4>Size</h4>
                <div className="size-layout">
                  <input
                    type="radio"
                    name="size"
                    value="S"
                    id="1"
                    className="size-input"
                  />
                  <label for="1" className="size">
                    S
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="M"
                    id="2"
                    className="size-input"
                  />
                  <label for="2" className="size">
                    M
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="L"
                    id="3"
                    className="size-input"
                  />
                  <label for="3" className="size">
                    L
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="XL"
                    id="4"
                    className="size-input"
                  />
                  <label for="4" className="size">
                    XL
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="XXL"
                    id="5"
                    className="size-input"
                  />
                  <label for="5" className="size">
                    XXL
                  </label>
                </div>
              </div>
              <div className="product-color">
                <h4>Color</h4>
                <div className="color-layout">
                  <input
                    type="radio"
                    name="color"
                    value="black"
                    className="color-input"
                  />
                  <label for="black" className="black"></label>
                  <input
                    type="radio"
                    name="color"
                    value="red"
                    className="color-input"
                  />
                  <label for="red" className="red"></label>

                  <input
                    type="radio"
                    name="color"
                    value="blue"
                    className="color-input"
                  />
                  <label for="blue" className="blue"></label>
                </div>
              </div>
              <span className="divider"></span>

              <div className="product-btn-group">
                <div className="button buy-now">
                  <i className="bx bxs-zap"></i> Buy Now
                </div>
                <div className="button add-cart">
                  <i className="bx bxs-cart"></i> Add to Cart
                </div>
                <div className="button heart">
                  <i className="bx bxs-heart"></i> Add to Wishlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail;
