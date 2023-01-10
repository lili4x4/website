import React from 'react';
import './PortfolioEntry.css'

interface Props {
    projectName: string;
    urlDemo?: any;
    urlGithubFrontend?: any;
    urlGithubBackend?: any;
    desc: string;
}

export const PortfolioEntry: React.FC <Props>= (props) => {
    return (
        <div id='PortfolioEntry'>
            <h4 className="project-name">{props.projectName}</h4>
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
            <p>{props.desc}</p> 
        </div>
    )
}