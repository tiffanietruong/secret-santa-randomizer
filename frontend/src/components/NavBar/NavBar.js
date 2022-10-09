import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="NavBar">
            <span className="right">
                <Button
                    variant='filled'
                    onClick={() => { navigate('/'); }}
                    sx={{ color: 'white', m: 1 }}
                >
                    Home
                </Button>
                <Button
                    variant='filled'
                    onClick={() => { navigate('/randomize');  }}
                    sx={{ color: 'white', m: 1 }}
                >
                    Randomize
                </Button>
                <Button
                    variant='filled'
                    onClick={() => { navigate('/uni-renegades'); }}
                    sx={{ color: 'white', m: 1 }}
                >
                    Uni Renegades
                </Button>
            </span>
        </div>
    );
}

export default NavBar;