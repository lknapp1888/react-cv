
import './App.css';
import React from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import CvOutput from './components/CvOutput';

function App() {
  return (
    <div className="App">
        <div className='inputContainer'>
          <Personal></Personal>
          <Education></Education>
          <Experience></Experience>
          <div className='inputSubContainer inputBtnContainer'>
            <button>Save</button>
          </div>
        </div>
        <div className='outputContainer'>
          <CvOutput></CvOutput>
        </div>
    </div>
  );
}

export default App;
