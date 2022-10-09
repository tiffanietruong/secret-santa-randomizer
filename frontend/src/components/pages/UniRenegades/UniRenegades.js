import React from 'react';
import { Button } from '@mui/material';
import './UniRenegades.css';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../CustomCard/CustomCard';

const UniRenegades = () => {
    const navigate = useNavigate();

    // TODO: replace with database call
    const years = ['2016', '2017', '2018', '2019', '2020', '2021'];
    const people = ['Clover', 'Isaac', 'Joey', 'Julia', 'Natalie', 'Tiffanie', 'Tiffany', 'Vanessa'];

    return (
        <div className='uni-renegades'>
            <div className='years'>
                <h1>Years</h1>
                <p>View our Secret Santa gift exchange history by year.</p>
                <div className='cards-container'>
                    {years.map(year => (
                        <CustomCard cardContent={year} />
                    ))}
                </div>
            </div>
            <div className="people">
                <h1>People</h1>
                <p>View the Secret Santa gift exchange history for any member of the Uni Renegades. </p>
                <div className='cards-container'>
                    {people.map(person => (
                        <CustomCard cardContent={person} />
                    ))}
                </div>
            </div>
            <Button
                className="button-this-year"
                variant='outlined'
                color="inherit"
                onClick={() => { navigate('/uni-renegades/this-year'); }}
                sx={{ mt: 3 }}
            >
                THIS YEAR
            </Button>
        </div>
    );
}

export default UniRenegades;