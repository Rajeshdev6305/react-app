import { useState } from 'react';
import Display from './Display';
import './Count.css'; 

export default function COUNTER() {
  const [value, setValue] = useState(0);
  const [random, setRandom] = useState(0);

  const handIncrement = () => {
    setValue(value + 1);
  };
  const handRandom = () => {
    setRandom(Math.random());
  };

  return (
    <div className="counter-container">
      <div className="button-container">
        <button onClick={handIncrement}>increment</button>
        <button onClick={handRandom}>clickhere</button>
      </div>
      <h1 className="result">{random}</h1>
      <Display value={value} />
    </div>
  );
}
