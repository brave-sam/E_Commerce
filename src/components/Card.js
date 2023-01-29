import React, { Component } from "react";
import TextForm from "./TextForm";

export class Card extends Component {
  data = [
    {
      title: "RexZ x Zara",
      price: "₹600011.98",
      imageUrl:
        "https://media.discordapp.net/attachments/856576234938695680/1068493925385519124/image0.jpg",
    },
    {
      title: "RexZ x Zara",
      price: "₹600011.98",
      imageUrl:
        "https://media.discordapp.net/attachments/856576234938695680/1068493925385519124/image0.jpg",
    },
    {
      title: "RexZ y Zara",
      price: "₹500011.98",
      imageUrl:
        "https://media.discordapp.net/attachments/856576234938695680/1068493925385519124/image0.jpg",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      data: this.data,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>HEAVY DISCOUNT ON LUXURY GOODS</h1>

        <div className="row">
          {this.state.data.map((element) => {
            return (
              <div className="col-md-3">
                <TextForm
                  title={element.title}
                  price={element.price}
                  imageUrl={element.imageUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Card;
