import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Faq from './components/Faq/Faq';
import Home from './components/Home';
import About from './components/About/About';
import logo from './Assets/loader-img-2.png'
import './App.css'
import KnowMore from './components/knowMore/KnowMore';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  },[]);

  return (
    <div>
      {loading ?
      <div className='loader-div'>
        <img className='loader-img' src={logo} alt='...' />
      </div> :

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/know-more' element={<KnowMore />} />
      </Routes>

     }
    </div>
  );
}
export default App;
