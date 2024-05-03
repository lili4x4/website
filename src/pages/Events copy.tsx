import React from 'react';
import "../App.css"
import "./Events.css"

import { Header } from '../components/Header';



function Events() {
return (
    <div className="events">
        <div className="main-content">
            <Header pageTitle="Lili Plans Events"/>
            <p className='margin-bottom'>
                Lili has over 4 years of experience producing and coordinating mid to large-scale events. 
                She worked at the Natural History Museums of Los Angeles County coordinating internal events and managing third-party events at NHMLA and the La Brea Tar Pits.
                You can check out a couple of her events below.
            </p>
            <Header pageTitle="Event Gallery"/>


            <h3>Events at Occasions Caterers</h3>
            <p>
                Since June of 2023, Lili has been an Event Manager at Occasions Caterers, a top luxury caterer in Washington, D.C.
                During this time, she has coordinated catering and other vendors for events ranging from intimate dinners to internal promotional events to plated galas at premier D.C. venues.
            </p>
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox1">
                    <div className="col-12 col-md-6 col-lg-3">
                        <img src={require('../assets/ILEA1.jpg')} data-target="#indicators1" data-slide-to="0" alt="" /> 
                    </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2.jpg')} data-target="#indicators1" data-slide-to="1" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/MobileHome1.jpg')} data-target="#indicators1" data-slide-to="2"  alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/MobileHome3.jpg')} data-target="#indicators1" data-slide-to="3" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor1.jpg')} data-target="#indicators1" data-slide-to="4"  alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor2.jpg')} data-target="#indicators1" data-slide-to="5" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor3.jpg')} data-target="#indicators1" data-slide-to="6" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor4.jpg')} data-target="#indicators1" data-slide-to="7" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAvert1.jpg')} data-target="#indicators1" data-slide-to="8" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAvert2.jpg')} data-target="#indicators1" data-slide-to="9" alt="" />
                </div>
            </div>

            <div className="modal fade" id="lightbox1" role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close text-right p-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div id="indicators1" className="carousel slide" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#indicators1" data-slide-to="0" className="active"></li>
                                <li data-target="#indicators1" data-slide-to="1"></li>
                                <li data-target="#indicators1" data-slide-to="2"></li>
                                <li data-target="#indicators1" data-slide-to="3"></li>
                                <li data-target="#indicators1" data-slide-to="4"></li>
                                <li data-target="#indicators1" data-slide-to="5"></li>
                                <li data-target="#indicators1" data-slide-to="6"></li>
                                <li data-target="#indicators1" data-slide-to="7"></li>
                                <li data-target="#indicators1" data-slide-to="8"></li>
                                <li data-target="#indicators1" data-slide-to="9"></li>
                            </ol>
                            <div className="carousel-inner">
                    
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={require('../assets/ILEA1.jpg')} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2.jpg')} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/MobileHome1.jpg')} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/MobileHome3.jpg')} alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor1.jpg')} alt="Fifth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor2.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor3.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor4.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAvert1.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAvert2.jpg')} alt="Sixth slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#indicators1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#indicators1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h3>ILEA SEARCH Gala</h3>
            <p>
                The International Live Events Association (ILEA) "SEARCH Your Heart" Gala benefitted the SEARCH Foundation, an organization created to assist special event professionals faced with a life threatening illness or catastrophic occurrence.
                Lili worked with ILEA coordinators and vendors to provide in-kind sponsorships for the event, which had a cocktail hour and a reception.
                There was also a lounge, a DJ, remarks, and a raffle.
            </p>
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox1">
                    <div className="col-12 col-md-6 col-lg-3">
                        <img src={require('../assets/ILEA1.jpg')} data-target="#indicators1" data-slide-to="0" alt="" /> 
                    </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2.jpg')} data-target="#indicators1" data-slide-to="1" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/MobileHome1.jpg')} data-target="#indicators1" data-slide-to="2"  alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/MobileHome3.jpg')} data-target="#indicators1" data-slide-to="3" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor1.jpg')} data-target="#indicators1" data-slide-to="4"  alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor2.jpg')} data-target="#indicators1" data-slide-to="5" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor3.jpg')} data-target="#indicators1" data-slide-to="6" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAhor4.jpg')} data-target="#indicators1" data-slide-to="7" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAvert1.jpg')} data-target="#indicators1" data-slide-to="8" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/ILEA2019/ILEAvert2.jpg')} data-target="#indicators1" data-slide-to="9" alt="" />
                </div>
            </div>

            <div className="modal fade" id="lightbox1" role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close text-right p-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div id="indicators1" className="carousel slide" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#indicators1" data-slide-to="0" className="active"></li>
                                <li data-target="#indicators1" data-slide-to="1"></li>
                                <li data-target="#indicators1" data-slide-to="2"></li>
                                <li data-target="#indicators1" data-slide-to="3"></li>
                                <li data-target="#indicators1" data-slide-to="4"></li>
                                <li data-target="#indicators1" data-slide-to="5"></li>
                                <li data-target="#indicators1" data-slide-to="6"></li>
                                <li data-target="#indicators1" data-slide-to="7"></li>
                                <li data-target="#indicators1" data-slide-to="8"></li>
                                <li data-target="#indicators1" data-slide-to="9"></li>
                            </ol>
                            <div className="carousel-inner">
                    
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={require('../assets/ILEA1.jpg')} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2.jpg')} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/MobileHome1.jpg')} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/MobileHome3.jpg')} alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor1.jpg')} alt="Fifth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor2.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor3.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAhor4.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAvert1.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/ILEA2019/ILEAvert2.jpg')} alt="Sixth slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#indicators1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#indicators1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='margin-top'>Haunted Museum 2021</h3>
            <p>
                Haunted Museum is the Natural History Museum of Los Angeles County's annual Halloween event for Museum members.
                Haunted Museum 2021 was three events in one: a family friendly daytime event, an adults-only nighttime event, and virtual programming.
                The live event was outside due to COVID-19 restrictions and featured a scavenger hunt with curator tables, a themed reveal,
                a stage with programming, a flashlight tour of the Spider Pavilion, music, Halloween decor, and food trucks. Lili secured all vendors, coordinated with other museum departments,
                and managed speakers/performers.
            </p>

            <div className="container">
                <div className="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox2">
                    <div className="col-12 col-md-6 col-lg-3">
                        <img src={require('../assets/HauntedMuseum2021/HM1.jpg')} data-target="#indicators2" data-slide-to="0" alt="" /> 
                    </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM2.jpg')} data-target="#indicators2" data-slide-to="1" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM3.jpg')} data-target="#indicators2" data-slide-to="2"  alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM4.jpg')} data-target="#indicators2" data-slide-to="3" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM5.jpg')} data-target="#indicators2" data-slide-to="4"  alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM6.jpg')} data-target="#indicators2" data-slide-to="5" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM7.jpg')} data-target="#indicators2" data-slide-to="6" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM8.jpg')} data-target="#indicators2" data-slide-to="7" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM9.jpg')} data-target="#indicators2" data-slide-to="8" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM10.jpg')} data-target="#indicators2" data-slide-to="9" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM11.jpg')} data-target="#indicators2" data-slide-to="10" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM12.jpg')} data-target="#indicators2" data-slide-to="11" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM13.jpg')} data-target="#indicators2" data-slide-to="12" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM14.jpg')} data-target="#indicators2" data-slide-to="13" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM15.jpg')} data-target="#indicators2" data-slide-to="14" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM16.jpg')} data-target="#indicators2" data-slide-to="15" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM17.jpg')} data-target="#indicators2" data-slide-to="16" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM18.jpg')} data-target="#indicators2" data-slide-to="17" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM19.jpg')} data-target="#indicators2" data-slide-to="18" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img src={require('../assets/HauntedMuseum2021/HM20.jpg')} data-target="#indicators2" data-slide-to="19" alt="" />
                </div>
            </div>

            <div className="modal fade" id="lightbox2" role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close text-right p-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div id="indicators2" className="carousel slide" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#indicators2" data-slide-to="0" className="active"></li>
                                <li data-target="#indicators2" data-slide-to="1"></li>
                                <li data-target="#indicators2" data-slide-to="2"></li>
                                <li data-target="#indicators2" data-slide-to="3"></li>
                                <li data-target="#indicators2" data-slide-to="4"></li>
                                <li data-target="#indicators2" data-slide-to="5"></li>
                                <li data-target="#indicators2" data-slide-to="6"></li>
                                <li data-target="#indicators2" data-slide-to="7"></li>
                                <li data-target="#indicators2" data-slide-to="8"></li>
                                <li data-target="#indicators2" data-slide-to="9"></li>
                                <li data-target="#indicators2" data-slide-to="10"></li>
                                <li data-target="#indicators2" data-slide-to="11"></li>
                                <li data-target="#indicators2" data-slide-to="12"></li>
                                <li data-target="#indicators2" data-slide-to="13"></li>
                                <li data-target="#indicators2" data-slide-to="14"></li>
                                <li data-target="#indicators2" data-slide-to="15"></li>
                                <li data-target="#indicators2" data-slide-to="16"></li>
                                <li data-target="#indicators2" data-slide-to="17"></li>
                                <li data-target="#indicators2" data-slide-to="18"></li>
                                <li data-target="#indicators2" data-slide-to="19"></li>
                            </ol>
                            <div className="carousel-inner">
                    
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM1.jpg')} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM2.jpg')} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM3.jpg')} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM4.jpg')} alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM5.jpg')} alt="Fifth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM6.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM7.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM8.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM9.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM10.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM11.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM12.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM13.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM14.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM15.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM16.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM17.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM18.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM19.jpg')} alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../assets/HauntedMuseum2021/HM20.jpg')} alt="Sixth slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#indicators2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#indicators2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Events;