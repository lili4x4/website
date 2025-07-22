import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Events from './pages/Events';
import Coding from './pages/Coding';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { Nav } from './components/Nav';

function App() {
  return (    
      <div>
         <Home />
        {/* <Nav />
          Define all the routes - <this should be a comment
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="coding" element={<Coding />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </div>
      );
}

export default App;
