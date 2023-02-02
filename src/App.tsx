import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1 id="name">Liliana Parra</h1>
      </Link>
      <nav id="main-nav">
        <ul className="nav-ul">
          <li className='nav-li'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-li'>
            <Link to="about">About</Link>
          </li>
          <li className='nav-li'>
            <Link to="resume">Resume</Link>
          </li>
          <li className='nav-li'>
            <Link to="portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <div id="main-content">
        <div className="main-box">
          {/* Define all the routes */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="portfolio" element={<Portfolio />}></Route>
            <Route path="resume" element={<Resume />}></Route>
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
      );
}

export default App;
