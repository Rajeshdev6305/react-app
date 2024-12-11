import React, { useState, useEffect } from 'react';
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput(evalResult.toString());
      } catch {
        setResult('Error');
        setInput('Error');
      }
    } else if (/^[0-9+\-*/.=]$/.test(value)) {
      setInput(input + value);
      setResult(null);
    } else if (value === 'Backspace') {
      setInput(input.slice(0, -1));
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/^[0-9+\-*/.=]$/.test(key) || key === 'Backspace' || key === 'Enter') {
      event.preventDefault();
      handleInput(key === 'Enter' ? '=' : key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  const renderButtons = () => {
    const topButtons = ['C'];
    const mainButtons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+'
    ];

    return (
      <>
        <div className="top-row">
          {topButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleInput(btn)}
              className="calculator-button clear"
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="main-grid">
          {mainButtons.map((btn, index) => {
            let className = "calculator-button";
            if (['/', '*', '-', '+', '='].includes(btn)) {
              className += " operator";
            }
            return (
              <button key={index} onClick={() => handleInput(btn)} className={className}>
                {btn}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="calculator">
      <h2 style={{color:"black"}}>React Calculator</h2>
      <div className="calculator-screen">
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
        />
      </div>
      <div className="calculator-buttons">{renderButtons()}</div>
    </div>
  );
};

export default Calculator;










// import React, { useState } from 'react';
// import "./Calculator.css";

// const Calculator = () => {
//   const [input, setInput] = useState(''); // To keep track of the input string
//   const [result, setResult] = useState(null); // To store the calculated result

//   // Handle button clicks
//   const handleClick = (value) => {
//     if (value === 'C') {
//       setInput('');
//       setResult(null);
//     } else if (value === '=') {
//       try {
//         const evalResult = eval(input); // Evaluate the expression
//         setResult(evalResult);
//         setInput(evalResult.toString()); // Update the input with the result
//       } catch {
//         setResult('Error');
//         setInput('Error');
//       }
//     } else {
//       setInput(input + value);
//       setResult(null); // Clear the result when typing a new input
//     }
//   };

//   const renderButtons = () => {
//     const topButtons = ['C']; // Top row with only the clear button
//     const mainButtons = [
//       '7', '8', '9', '/', 
//       '4', '5', '6', '*', 
//       '1', '2', '3', '-', 
//       '0', '.', '=', '+'
//     ];
  
//     return (
//       <>
//         {/* Render the top row button */}
//         <div className="top-row">
//           {topButtons.map((btn, index) => (
//             <button
//               key={index}
//               onClick={() => handleClick(btn)}
//               className="calculator-button clear"
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         {/* Render the main grid buttons */}
//         <div className="main-grid">
//           {mainButtons.map((btn, index) => {
//             let className = "calculator-button";
//             if (['/', '*', '-', '+', '='].includes(btn)) {
//               className += " operator"; // Assign operator class
//             }
  
//             return (
//               <button key={index} onClick={() => handleClick(btn)} className={className}>
//                 {btn}
//               </button>
//             );
//           })}
//         </div>
//       </>
//     );
//   };
  
//   return (
//     <div className="calculator">
//       <h2>React Calculator</h2>
//       <div className="calculator-screen">
//         <input
//           type="text"
//           value={input}
//           readOnly
//           placeholder="0"
//         />
//       </div>
//       <div className="calculator-buttons">{renderButtons()}</div>
//     </div>
//   );
// };

// export default Calculator;


