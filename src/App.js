import React from 'react';
import { Header, Slider, Currencies } from 'components'

import 'styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Currencies
        className="mt-25"
      />
    </div>
  );
}

export default App;
