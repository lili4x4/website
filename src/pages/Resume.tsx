import React from 'react';
import { Header } from '../components/Header';
import myResume from '../assets/Resume-Liliana-Parra.pdf'

function Resume() {
return (
    <div className="App">
        <Header pageTitle="Resume"/>
        <a href={myResume} target="_blank" rel="noreferrer">
            <h3>Open in separate tab</h3>
        </a>
        <iframe 
            title="Liliana Parra Resume PDF" 
            src={require("../assets/Resume-Liliana-Parra.pdf")}
            width="100%"
            height="500px"
        />
    </div>
);
}

export default Resume;