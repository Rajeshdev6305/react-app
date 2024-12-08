import React, { useState } from "react";

const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleEvent = (change) => {
    setCounter((prevCounter) => prevCounter + change);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-value">{counter}</h1>
      <div className="button-container">
        <button
          className="counter-button increment"
          onClick={() => handleEvent(1)}
        >
          +1
        </button>
        <button
          className="counter-button decrement"
          onClick={() => handleEvent(-1)}
        >
          -1
        </button>
        <button
          className="counter-button increment"
          onClick={() => handleEvent(2)}
        >
          +2
        </button>
        <button
          className="counter-button decrement"
          onClick={() => handleEvent(-2)}
        >
          -2
        </button>
        <button
          className="counter-button increment"
          onClick={() => handleEvent(5)}
        >
          +5
        </button>
        <button
          className="counter-button decrement"
          onClick={() => handleEvent(-5)}
        >
          -5
        </button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
