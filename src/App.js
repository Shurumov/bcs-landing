import React from 'react';
import {Header, Slider, Currencies, Calculator, NewsList, Reasons, OpenAccount, Footer} from 'components'

import 'styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Currencies
        className="block_separate"
      />
      <Calculator
        className="block_separate"
      />
      <NewsList
        className="block_separate"
      />
      <Reasons
        className="block_separate"
      />
      <OpenAccount
        className="block_separate"
      />
      <Footer/>
    </div>
  );
}

export default App;
