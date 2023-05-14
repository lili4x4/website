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
        <Nav />
          {/* Define all the routes */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="coding" element={<Coding />}></Route>
            <Route path="events" element={<Events />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </div>
      );
}

export default App;
