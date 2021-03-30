import './App.css';
import React, { useState } from 'react';
import UnitControl from 'components/unitControl';
import CardFooter from 'components/cardFooter';
import UnitConverter from 'components/unitConverter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function App() {
  const [inputValue, setInputValue] = useState(0);

  const changeValue = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter inputValue={inputValue} changeValue={changeValue} />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
