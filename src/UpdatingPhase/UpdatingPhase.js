import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "../Portfolio/profilecard";
import Loader from "../Loader";

class UpdatingPhase extends Component {
  constructor() {
    super();
    this.state = { count: 1, product: null };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count value updated to ${this.state.count}`);
      this.fetchProduct();
    }
  }

  fetchProduct = () => {
    const { count } = this.state;

    axios
      .get(`https://fakestoreapi.com/products/${count}`)
      .then((res) => {
        this.setState({ product: res.data });
      })
      .catch((err) => {
        console.error("Error fetching product data", err);
        this.setState({ product: null });
      });
  };

  handleButtonClick = (number) => {
    this.setState({ count: number });
  };

  render() {
    const { count, product } = this.state;

    const buttonColors = [
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
      "#8bb7aa",
    ];

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Product Number: {count}</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {!product ? (
            <Loader />
          ) : (
            <ProfileCard
              img={product.image}
              title={product.title}
              desc={product.description}
              info={product.category}
            />
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {buttonColors.map((color, index) => (
            <button
              key={index}
              onClick={() => this.handleButtonClick(index + 1)}
              style={{
                backgroundColor: color,
                color: "#fff",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default UpdatingPhase;
