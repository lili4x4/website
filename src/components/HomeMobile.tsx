import React from 'react';
import './HomeMobile.css'

interface Props {
}

export const HomeMobile: React.FC <Props>= (props) => {
    return (
        <>
            <div id="home" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require('../assets/MobileHome1.jpg')} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../assets/MobileHome2.jpg')} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../assets/MobileHome3.jpg')} alt="Third slide" />
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