import React from 'react';
import './Header.css'

interface Props {
    pageTitle: string;
}

export const Header: React.FC <Props>= (props) => {
    return (
        <div>
            <h2 id='header'>{props.pageTitle}</h2> 
        </div>
    )
}