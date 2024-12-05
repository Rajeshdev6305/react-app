import React, { Component } from "react";
import ProfileCard from "../ProfileCard/profilecard";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

class LifeCycle extends Component {
  constructor() {
    console.log("constructing");
    super();
    this.state = { products: [], isLoading: true };
  }

  componentDidMount() {
    console.log("mounting");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json, isLoading: false });
      });
  }

  render() {
    console.log("rendering");

    return (
      <div>
        {this.state.isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div>
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", }}>
            {this.state.products.map((a, b) => {
              return (
                <ProfileCard
                  key={b}
                  img={a.image}
                  title={a.title}
                  desc={a.description}
                  info={a.category}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default LifeCycle;










