
import './App.css';
import React from 'react';
import Personal from './components/Personal';

function App() {
  return (
    <div className="App">
        <div className='inputContainer'>
          <Personal></Personal>
        </div>
        <div className='cvContainer'></div>
    </div>
  );
}

export default App;
