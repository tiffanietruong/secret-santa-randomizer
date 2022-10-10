import * as React from 'react';

import './ThisYear.css';
import RevealCard from '../../RevealCard/RevealCard';
import ResetDialog from '../../ResetDialog/ResetDialog';  

const ThisYear = () => {
    const year = "2022";
    const people = ['Clover', 'Isaac', 'Joey', 'Julia', 'Natalie', 'Tiffanie', 'Tiffany', 'Vanessa'];

    return (
        <div className='ThisYear'>
            <div className='ThisYear-main'>
                <h1>{year}</h1>
                <p>If you're ready to find out your Secret Santee for this year, provide your personalized password.</p>
                <div className='reveal-card-container'>
                    {people.map(person => (
                        <RevealCard year={year} secretSanta={person} />
                    ))}
                </div>
            </div>
            <ResetDialog/>
        </div>
    );
}

export default ThisYear;