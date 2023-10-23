import React from 'react';
import './App.css';
import Calc from './Components/calc/Calc'; 

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="title">
        <p>
          Ract Calculator By Useing <span> useState </span> Hooks 
        </p>
      </div>
      <Calc />
    </div>
  );
}

export default App;
