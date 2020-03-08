import React from 'react';
import { Header, Slider, Currencies, Calculator } from 'components'

import 'styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Currencies
        className="mt-25"
      />
      <Calculator
        className="mt-25"
      />
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
