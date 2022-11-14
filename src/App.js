import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Faq from './components/Faq/Faq';
import Home from './components/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
