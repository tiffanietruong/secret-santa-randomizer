import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import './ThisYear.css';
import RevealCard from '../../RevealCard/RevealCard';

const ThisYear = () => {
    const navigate = useNavigate();
    const year = 2022;
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
                {/* <RevealCard secretSanta={"Tiffanie"} /> */}
            </div>
            {/* <Button
                variant='outlined'
                color="inherit"
                onClick={() => { navigate('/'); }}
                sx={{ mt: 3 }}
            >
                RESET YOUR REVEAL PASSWORD
            </Button> */}
        </div>
    );
}

export default ThisYear;