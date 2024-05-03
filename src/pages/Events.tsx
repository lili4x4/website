import React from 'react';
import "../App.css"
import "./Events.css"

import { Header } from '../components/Header';



// Define a type for the event data
type Event = {
    title: string;
    description: string;
    images: string[];
    modalId: string;
};

// Define props type for EventSection component
type EventSectionProps = {
    title: string;
    description: string;
    images: string[];
    modalId: string;
};

// Define a reusable component for event sections
const EventSection: React.FC<EventSectionProps> = ({ title, description, images, modalId }) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="container margin-bottom">
                <div className="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target={`#${modalId}`}>
                    {images.map((image, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <img src={require(`../assets/${image}`)} data-target={`#indicators${modalId}`} data-slide-to={index} alt="" />
                        </div>
                    ))}
                </div>
                <div className="modal fade" id={modalId} role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close text-right p-2" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div id={`indicators${modalId}`} className="carousel slide" data-interval="false">
                                <ol className="carousel-indicators">
                                    {images.map((_, index) => (
                                        <li key={index} data-target={`#indicators${modalId}`} data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                                    ))}
                                </ol>
                                <div className="carousel-inner">
                                    {images.map((image, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <img className="d-block w-100" src={require(`../assets/${image}`)} alt={`Slide ${index}`} />
                                        </div>
                                    ))}
                                </div>
                                <a className="carousel-control-prev" href={`#indicators${modalId}`} role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href={`#indicators${modalId}`} role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

function Events() {
    // Array of event data
    const eventsData: Event[] = [
        {
            title: "Occasions Caterers",
            description: "Since June of 2023, Lili has been an Event Manager at Occasions Caterers, a top luxury caterer in Washington, D.C. During this time, she has coordinated catering and other vendors for events ranging from intimate dinners to internal promotional events to plated galas at premier D.C. venues.",
            images: Array.from({ length: 23 }, (_, index) => `Occasions/OCC${index + 1}.jpeg`),
            modalId: "lightboxOccasions"
        },
        {
            title: "Haunted Museum 2021",
            description: "Haunted Museum is the Natural History Museum of Los Angeles County's annual Halloween event for Museum members. Haunted Museum 2021 was three events in one: a family-friendly daytime event, an adults-only nighttime event, and virtual programming. The live event was outside due to COVID-19 restrictions and featured a scavenger hunt with curator tables, a themed reveal, a stage with programming, a flashlight tour of the Spider Pavilion, music, Halloween decor, and food trucks. Lili secured all vendors, coordinated with other museum departments, and managed speakers/performers.",
            images: Array.from({ length: 20 }, (_, index) => `HauntedMuseum2021/HM${index + 1}.jpg`),
            modalId: "HMlightbox"
        },
        {
            title: "ILEA SEARCH Gala",
            description: "The International Live Events Association (ILEA) 'SEARCH Your Heart' Gala benefitted the SEARCH Foundation, an organization created to assist special event professionals faced with a life-threatening illness or catastrophic occurrence. Lili worked with ILEA coordinators and vendors to provide in-kind sponsorships for the event, which had a cocktail hour and a reception. There was also a lounge, a DJ, remarks, and a raffle.",
            images: Array.from({ length: 10 }, (_, index) => `ILEA2019/ILEA${index + 1}.jpg`),
            modalId: "lightboxILEA"
        },
    ];

    return (
        <div className="events">
            <div className="main-content">
                <Header pageTitle="Lili Plans Events"/>
                <p className='margin-bottom'>
                    Lili has over 4 years of experience producing and coordinating mid to large-scale events. 
                    She worked at the Natural History Museums of Los Angeles County coordinating internal events and managing third-party events at NHMLA and the La Brea Tar Pits.
                    You can check out a few of her events below.
                </p>
                <Header pageTitle="Event Gallery"/>
                {/* Map over the eventsData array to render EventSection components */}
                {eventsData.map((event, index) => (
                    <EventSection
                        key={index}
                        title={event.title}
                        description={event.description}
                        images={event.images}
                        modalId={event.modalId}
                    />
                ))}
            </div>
        </div>
    );
}

export default Events;
