import './App.css';
import React, { useState } from 'react';
import UnitControl from 'components/unitControl';
import CardFooter from 'components/cardFooter';

function App() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input
              type="number"
              className="input-number"
              min="0"
              value={inputValue}
              onChange={(e) => {
                setInputValue(Number(e.target.value));
              }}
            />
          </div>
          <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
            <i className="fas fa-angle-right"></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              type="text"
              className="input-number text-right"
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

export default App;
