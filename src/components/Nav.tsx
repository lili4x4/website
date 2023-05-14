import React from 'react';
import './Nav.css'
import { Routes, Route, Link } from "react-router-dom";

interface Props {
}

export const Nav: React.FC <Props>= (props) => {
    return (
        <nav id="nav">
            <Link to="/">
                <h1 id="name">Liliana Parra</h1>
            </Link>
            
                <ul className="nav-ul">
                    {/* <li className='nav-li'>|</li>
                    <li className='nav-li'>
                        <Link to="resume">Events</Link>
                    </li>
                    <li className='nav-li'>|</li>
                    <li className='nav-li'>
                        <Link to="portfolio">Coding</Link>
                    </li> */}
                    <li className='nav-li'>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </nav>
    )
}