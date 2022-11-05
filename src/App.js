import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact'


function App() {
  return(
    <div>
      <Routes>
       <Route path="/" element={ <Home/> } />
        <Route path="Contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App;