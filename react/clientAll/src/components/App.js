import '../App.css';
// css
import '../css/new.css';
// header
import HeaderAdmin from './Header/Header admin';
// footer
import Footer from './Footer/Footer';

import React, {useState} from 'react';
import {Routes, Route, Link } from "react-router-dom";

import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2';

import reactThrottle from './R095_reactThrottle';
import floatingPopulationList from './floatingPopulationList';

function App() {
  return (
    <div className="App">
      <HeaderAdmin/> 
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/insert' element={<Insert></Insert>} />
        <Route path='/Throttle' Component={reactThrottle} />
        <Route path='/floatPopulationList' Component={floatingPopulationList} />
      </Routes>
      <Footer/>
    </div>
  );
}

function Home () {
  return (
    <>
      <h1>홈페이지</h1>
      <div><a href='/insert'>추가</a></div>
      <div><Link to="/insert">링크를사용해이동</Link></div>
    </>
  );
}
function Insert () {
  return (
    <>
      <h1>추가</h1>
      <div><Link to="/">홈으로이동</Link></div>
    </>
  );
}
export default App;
