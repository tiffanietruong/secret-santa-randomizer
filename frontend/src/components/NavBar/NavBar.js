import React from 'react';
import { Button } from '@mui/material';

import './NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <span className="right">
                <Button variant='filled' sx={{ color: 'white', m: 1 }}>Home</Button>
                <Button variant='filled' sx={{ color: 'white', m: 1 }}>Randomize</Button>
                <Button variant='filled' sx={{ color: 'white', m: 1 }}>Uni Renegades</Button>
                <Button variant='filled' sx={{ color: 'white', m: 1 }}>2022</Button>
            </span>
        </div>
    );
}

export default NavBar;