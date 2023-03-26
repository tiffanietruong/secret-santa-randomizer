import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import GlobalStyle from './GlobalStyle';

import Header from './sections/Header';
import InputSection from './sections/InputSection';
import DisplaySection from './sections/DisplaySection';

import { OutlinedButton } from './components/Buttons';
import Spacer from './components/Spacer';

import { parseNames } from './utils/parsingUtils';
import { IDS } from './ids';

const App = () => {
    const [names, setNames] = useState([]);
    const [exclusions, setExclusions] = useState({});

    const handleNameChange = (newNameString) => {
        setNames(parseNames(newNameString));
    }

    const handleClearButtonClick = () => {
        const nameTextArea = document.getElementById(IDS.NAME_TEXT_AREA);
        nameTextArea.value='';
        handleNameChange('');
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={6} align='center'>
                <GlobalStyle/>
                <Header/>
                <OutlinedButton accentColour='palevioletred' onClick={handleClearButtonClick}>Clear input</OutlinedButton>
			    <OutlinedButton accentColour='darkseagreen'>Randomize</OutlinedButton>
                <Spacer spacing={3} /> 
                <DisplaySection
                    names={names}
                    handleNameChange={handleNameChange}
                >
                </DisplaySection>
                <Spacer spacing={7} /> 
                <InputSection 
                    accentColour='palevioletred'
                    instructions='Enter a comma-separated list of names. Duplicates will be removed.'
                    onChange={handleNameChange}
                    textAreaId={IDS.NAME_TEXT_AREA}
                    title='Names'>
                </InputSection>
                <Spacer spacing={3} />
                <InputSection 
                    accentColour='darkseagreen'
                    instructions="Enter lines of the form 'santa: exclusion1, exclusion2, ...'"
                    title='Exclusions'>
                </InputSection>
                <Spacer spacing={5} /> 
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    );
}

export default App;
