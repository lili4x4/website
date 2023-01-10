import React from 'react';
import { Header } from '../components/Header';
import "../App.css"

function About() {
return (
    <div className="App">
        <Header pageTitle="About"/>
        <p>
                Liliana “Lili” Parra is a software developer and creative producer from Caracas, Venezuela.
                She worked in film and event production before making a career change to software development through enrolling in Ada Developers Academy.
        </p>
        <p>
        Lili believes that tech has the power to help others by increasing access, educating, and solving common problems.
                When not staring at a computer, Lili likes to travel, hike, pet dogs, and play board games with friends.
        </p>
    </div>
    );
}

export default About;