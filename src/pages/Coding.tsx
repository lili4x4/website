import React from 'react';
import { Header } from '../components/Header';
import { PortfolioEntry } from '../components/PortfolioEntry';
import entries from '../data/portfolioentries.json'
import "../App.css"

function Coding() {
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
        <div className="main-content padding-bottom">
            <Header pageTitle="Lili Codes"/>
            <p>
                Once upon a time, during a pandemic, Lili re-evaluated her life and decided to finally try out coding.
                She went all in, even applying and being admitted to Ada Developers Academy, a full-stack web development bootcamp.
                She learned a LOT, mostly that she can do anything she sets her mind to. After doing a couple of interships in software development, though,
                she also learned that she likes coding more as a hobby than as a career. 
            </p>
            <p className='margin-bottom'>Check out some of Lili's coding projects below!</p>
            <Header pageTitle="Coding Portfolio"/>
            <section>{PortfolioEntries}</section>
        </div>
    );
}

export default Coding;