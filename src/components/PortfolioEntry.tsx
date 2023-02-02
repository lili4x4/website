import React from 'react';
import './PortfolioEntry.css'

interface Props {
    projectName: string;
    img?: string;
    alt?: string;
    urlDemo?: string;
    urlGithubFrontend?: string;
    urlGithubBackend?: string;
    desc: string;
}

export const PortfolioEntry: React.FC <Props>= (props) => {
    return (
        <div id='PortfolioEntry'>
            <h3 className="project-name">{props.projectName}</h3>
            <p>{props.desc}</p>
            <div id="portfolio-links">
                {props.urlDemo &&
                    <a className="portfolio-link" href={props.urlDemo} target="_blank" rel="noreferrer">demo</a>
                }
                {props.urlGithubFrontend &&
                    <a className="portfolio-link" href={props.urlGithubFrontend} target="_blank" rel="noreferrer">front end</a>
                }
                {props.urlGithubBackend &&
                    <a className="portfolio-link" href={props.urlGithubBackend} target="_blank" rel="noreferrer">back end</a>
                }
            </div>
            {props.img &&
                <a href={require('../assets/' + props.img)} target="_blank" rel="noreferrer">
                    <img className='demo-photo' src={require('../assets/' +
        props.img)} alt={props.alt} />
                </a> 
            } 
            <p className='divider'> ______________________ </p>
        </div>
    )
}