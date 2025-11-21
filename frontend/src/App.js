import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import ViewService from './pages/Service'; 
import ViewProduct from './pages/Product';
import Signed from './pages/Signed';
import './App.css';

function App() {
  return (

    // Navigation
    <BrowserRouter>
      <nav>
        <div className='first_div'>
          <Link to="/">Home | </Link>
          <Link to="/services">View Our Services | </Link>
          <Link to='/products'>View Our Products | </Link>
          <Link to='signed'>Register | </Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ViewService />}/>
          <Route path="/products" element={<ViewProduct />}/>
          <Route path="/signed" element={<Signed />}/>
        </Routes>
      </div> 

    </BrowserRouter>
  );
}

export default App;
