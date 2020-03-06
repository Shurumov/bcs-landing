import React from 'react';
import { Header, Button, Slider } from 'components'

import 'styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Button>
        Консультация
      </Button>
    </div>
  );
}

export default App;
