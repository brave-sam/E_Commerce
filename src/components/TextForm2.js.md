import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Component } from "react";
import "./Card.css";

const handleBClick = () => {
console.log("Buy Now was clicked");
};
const handleAClick = () => render();
{
console.log("Add to cart was clicked");
}
class TextForm extends Component {
// const handleClearText = () => {
// let newText = "";
// setText(newText);
// props.showAlert("Text Has Been Cleared", "success");
// };

// const handleOnChange = (event) => {
// // console.log("On Change");
// setText(event.target.value);
// };

// const title = "Tshirt";
// const price = "₹600011.98";
// const imageUrl =
// "https://media.discordapp.net/attachments/856576234938695680/1068493925385519124/image0.jpg";
// let { title, imageUrl } = this.props;
render() {
const { title, price, imageUrl } = this.props;
return (
<>
<div className="card">
<div className="imgBox" onClick={handleAClick} href="/detailpage">
<img src={imageUrl} alt="insaan" className="mouse" />
</div>

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
}
export default TextForm;
