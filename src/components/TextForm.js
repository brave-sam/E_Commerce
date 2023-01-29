import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Card.css";
export default function TextForm(props) {
  const handleBClick = () => {
    console.log("Buy Now was clicked");
  };
  const handleAClick = () => {
    console.log("Add to cart  was clicked");
  };
  const [text, setText] = useState("");
  let { title, price, imageUrl } = props;
  return (
    <>
      <div className="card">
        <a className="imgBox" onClick={handleAClick} href="/detailpage">
          <img src={imageUrl} alt="insaan" className="mouse" />
        </a>

        <div className="contentBox" onClick={handleAClick}>
          <h3>{title}</h3>

          <h2 className="price">{price}</h2>
          <a href="/buypage" className="buy" onClick={handleBClick}>
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}
