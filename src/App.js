import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import GlobalStyle from './GlobalStyle';
import Header from './sections/Header';
import UserInput from './sections/UserInput';

import { OutlinedButton, SolidButton } from './components/Buttons';
import InputDisplay from './sections/InputDisplay';
import Spacer from './components/Spacer';
import Results from './sections/Results';

const App = () => {
    const [names, setNames] = useState([]);
    const [exclusions, setExclusions] = useState({});

    return (
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={6} align="center">
                <GlobalStyle/>
                <Header/>
                <UserInput 
                    accentColour="palevioletred"
                    instructions="Enter a comma-separated list of names."
                    title="Names">
                </UserInput>
                <Spacer spacing={2} />
                <UserInput 
                    accentColour="darkseagreen"
                    instructions="Enter lines of the form 'santa: exclusion1, exclusion2, ...'"
                    title="Exclusions">
                </UserInput>
                <InputDisplay
                    exclusions={exclusions}
                    names={names}
                    setExclusions={setExclusions}
                    setNames={setNames}
                >
                </InputDisplay>
                <OutlinedButton accentColour="palevioletred">Clear input</OutlinedButton>
			    <OutlinedButton accentColour="darkseagreen">Randomize</OutlinedButton>
                <Results></Results>
                <SolidButton accentColour="black">Download</SolidButton>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    );
}

export default App;
