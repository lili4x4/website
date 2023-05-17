import React from 'react';
import { Header } from '../components/Header';
import "../App.css"
import "./About.css"

function About() {
return (
    <div className="App">
        <div className="main-content">
           <Header pageTitle="About"/>
           <img className="bio-photo" src={require('../assets/bio-photo.jpg')} alt="Liliana Parra" />
            <p className='padding-bottom'>
                Liliana “Lili” Parra is an event coordinator by day and coder by night.
                She is originally from Caracas, Venezuela, and currently lives in Washington, D.C.
                Lili believes that experiences and tech have the potential to make positive change in the world by inspiring others and increasing access.
                When not staring at a computer or running around at an event, Lili is hiking, drinking craft beer, playing board games, and petting dogs.
            </p>
        </div>
    </div>
    );
}

export default About;