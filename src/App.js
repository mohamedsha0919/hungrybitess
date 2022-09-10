import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Blogs';
import Gallery from './components/Gallery';
import Ourteam from './components/Ourteam';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Menu' element={<Menu chickenburger = "$120"/>}></Route>
        
        <Route path='/Testimonials' element={<Testimonials/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
        <Route path='/Ourteam' element={<Ourteam/>}></Route>
        
        <Route path='/Contacts' element={<Contacts/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
