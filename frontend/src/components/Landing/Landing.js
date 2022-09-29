import * as React from 'react';
import { Button } from '@mui/material';

import './Landing.css';

const Landing = () => {
    return (
        <div className='Landing'>
            <div className='Landing-main'>
                <h1>Secret Santa Randomizer</h1>
                <p> Generate random pairings for a Secret Santa gift exchange. </p>
                <p> Input names, set exclusions, and see what the program registers in real-time. </p>
                <Button variant='outlined' color="inherit" sx={{ mt: 3 }}>RANDOMIZE</Button>
            </div>
            <div className="Landing-madewithlove">
                &#10084;&#65039; made with love by tiffanie for uniren &#128154;
            </div>
        </div>
    );
}

export default Landing;