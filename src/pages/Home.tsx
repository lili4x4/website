import React from 'react';
import './Home.css'

function Home() {
return (
    <div className="App">
    <img id='bio-photo' src={ require('../assets/biophoto.png') } alt="headshot of Liliana Parra" />
    <h3>Software developer</h3>
    </div>
);
}

export default Home;