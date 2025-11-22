import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import ViewService from './pages/Service'; 
import ViewProduct from './pages/Product';
import Signed from './pages/Signed';
import CodingDetails from './pages/CodingDetail';
import LearnCoding from './pages/LearnCoding';
import './App.css';
import LearnOnebyOne from './pages/LearnOnebyOne';
import ModelDevelopment from './pages/ModelDevelopment';
import DataScrapingDetails from './pages/DataScrapingDetail';
import AutomationDetails from './pages/AutomationDetail';

function App() {
  return (

    // Navigation
    <BrowserRouter>
      <nav>
        <div className='topnav'>
          <Link to="/">Home </Link>
          <Link to="/services">View Our Services </Link>
          <Link to='/products'>View Our Products </Link>
          <Link to='signed'>Register </Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ViewService />}/>
          <Route path="/products" element={<ViewProduct />}/>
          <Route path="/signed" element={<Signed />}/>
          <Route path="/codingdetails" element={<CodingDetails />}/>
          <Route path="/learncoding" element={<LearnCoding />}/>
          <Route path="/learnOnebyOne" element={<LearnOnebyOne />}/>
          <Route path="/ModelDevelopment" element={<ModelDevelopment />}/>
          <Route path="/datascraping" element={<DataScrapingDetails />}/>
          <Route path="/automationdetail" element={<AutomationDetails />}/>
        </Routes>
      </div> 

    </BrowserRouter>
  );
}

export default App;
