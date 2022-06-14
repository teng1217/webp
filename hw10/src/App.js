import './App.css';
import * as React from 'react';
import Personalpage from './Personal_Page';
const {useState,useEffect}=React;
function App() {
  return (
    <div className="App">
      <Personalpage useState={useState} useEffect={useEffect}/>
    </div>
  );
}

export default App;