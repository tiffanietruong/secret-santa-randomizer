import React, { useState } from 'react';
import { Button } from '@mui/material';

import './UniRenegades.css';
import { useNavigate } from 'react-router-dom';
import YearCard from '../../YearCard/YearCard';

const UniRenegades = () => {
    const navigate = useNavigate();

    // TODO: replace with database call
    const [years, setYears] = useState(['2016', '2017', '2018', '2019', '2020', '2021']);
    const [people, setPeople] = useState(['Clover', 'Isaac', 'Joey', 'Julia', 'Natalie', 'Tiffanie', 'Tiffany', 'Vanessa']);

    return (
        <div className='uni-renegades'>
            <div className='years'>
                <h1>Years</h1>
                <p>View our Secret Santa gift exchange history by year.</p>
                <div className='cards-container'>
                    {years.map(year => (
                        <YearCard year={year}/>
                    ))}
                </div>
            </div>
            <div className="people">
                <h1>People</h1>
                <p>View the Secret Santa gift exchange history for any member of the Uni Renegades. </p>
                <div className='cards-container'>
                </div>
            </div>
        </div>
    );
}

export default UniRenegades;