import React from 'react';
import './Main.css';

interface Props {
}

export const Main: React.FC <Props>= (props) => {
    return (
        <section className='main-box'>
            <p>
                Liliana “Lili” Parra is a software developer and creative producer from Caracas, Venezuela.
                She worked in film and event production before making a career change to software development through enrolling in Ada Developers Academy.
                Lili believes that tech has the power to help others by increasing access, educating, and solving common problems.
                When not staring at a computer, Lili likes to travel, hike, pet dogs, and play board games with friends.
            </p>
        </section>
    )
}