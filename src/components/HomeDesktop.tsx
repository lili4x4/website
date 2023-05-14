import React from 'react';
import './HomeDesktop.css'

interface Props {
}

export const HomeDesktop: React.FC <Props>= (props) => {
    return (
        <>
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
        <a className="carousel-control-prev" href="#home" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#home" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
        </>
        
    )
}