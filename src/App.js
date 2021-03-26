import './global-sass/_all-devices.scss';
import Home from './components/Home';
import react, { useState } from "react";


function App() {
  return (
    <div className="app">
      <div className="container">
         <form className='form'>
         <Home></Home>
         </form>
      </div>
    </div>
  );
}

export default App;
