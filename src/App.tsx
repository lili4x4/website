import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { Nav } from './components/Nav';

function App() {
  return (    
      <div>
        <Nav />
          {/* Define all the routes */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="portfolio" element={<Portfolio />}></Route>
            <Route path="resume" element={<Resume />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </div>
      );
}

export default App;
