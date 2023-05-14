import React from 'react';
import './HomeDesktop.css'

interface Props {
}

export const HomeDesktop: React.FC <Props>= (props) => {
    return (
        <div id="home" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={require('../assets/ILEA1.jpg')} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={require('../assets/HauntedMuseum1.jpg')} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={require('../assets/ILEA2.jpg')} alt="Third slide" />
                </div>
             </div>
        </div>
    )
}