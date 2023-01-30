import React from 'react';
import { Header } from '../components/Header';
import { PortfolioEntry } from '../components/PortfolioEntry';
import entries from '../data/portfolioentries.json'

function Portfolio() {
    const PortfolioEntries = entries.map((entry) => {
        return (
        <PortfolioEntry
            key={entry.name}
            projectName={entry.name}
            desc={entry.desc}
            img={entry.img}
            alt={entry.alt}
            urlDemo={entry.urlDemo}
            urlGithubFrontend={entry.urlGithubFrontend}
            urlGithubBackend={entry.urlGithubBackend}
        />
        );
    });
    
    return (
        <div className="App">
        <Header pageTitle="Portfolio"/>
        
        <section>{PortfolioEntries}</section>
        </div>
    );
}

export default Portfolio;