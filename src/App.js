import React from 'react';
import { Header, Slider } from 'components'

import 'styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider
        style={{
          marginTop: '-56px'
        }}
      />
    </div>
  );
}

export default App;
