import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import GlobalStyle from './GlobalStyle';

import Header from './sections/Header';
import InputSection from './sections/InputSection';
import DisplaySection from './sections/DisplaySection';

import { OutlinedButton } from './components/common/Buttons';
import Spacer from './components/common/Spacer';

import { IDS } from './ids';
import { parseInputIntoExclusions, parseInputIntoNames } from './utils/parsingUtils';

const App = () => {
    const [names, setNames] = useState([]);
    const [exclusions, setExclusions] = useState({});

    const [previousInput, setPreviousInput] = useState('');
    const [isClearButton, setIsClearButton] = useState(true);

    const handleNameChange = (newNameInput) => {
        setNames(parseInputIntoNames(newNameInput));
        recalculateExclusions();
    }

    const recalculateExclusions = () => {
        const exclusionTextarea = document.getElementById(IDS.EXCLUSION_TEXTAREA);
        setExclusions(parseInputIntoExclusions(names, exclusionTextarea.value));
    }

    const handleClearButtonClick = () => {
        if (!isClearButton) {
            return;
        }
        const nameTextArea = document.getElementById(IDS.NAME_TEXTAREA);
        if (!nameTextArea || nameTextArea.value === '') {
            return;
        }
        setPreviousInput(nameTextArea.value);
        nameTextArea.value='';
        handleNameChange('');
        setIsClearButton(false);
    }

    const handleRestoreButtonClick = () => {
        if (isClearButton) {
            return;
        }
        const nameTextArea = document.getElementById(IDS.NAME_TEXTAREA);
        if (!nameTextArea) {
            return;
        }
        nameTextArea.value=previousInput;
        handleNameChange(previousInput);
        setIsClearButton(true);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={6} align='center'>
                <GlobalStyle/>
                <Header/>
                { isClearButton ?             
                    <OutlinedButton accentColour='palevioletred' onClick={handleClearButtonClick}>Clear input</OutlinedButton> : 
                    <OutlinedButton accentColour='palevioletred' onClick={handleRestoreButtonClick}>Restore input</OutlinedButton>
                }
			    <OutlinedButton accentColour='darkseagreen' onClick={parseInputIntoExclusions}>Randomize</OutlinedButton>
                <Spacer spacing={70} /> 
                <DisplaySection
                    names={names}
                    exclusions={exclusions}
                    handleNameChange={handleNameChange}
                >
                </DisplaySection>
                <Spacer spacing={75} /> 
                <InputSection 
                    title='Names'
                    accentColour='palevioletred'
                    instructions='Enter a comma-separated list of names. Duplicates will be removed.'
                    onChange={handleNameChange}
                    setIsClearButton={setIsClearButton}
                    textareaId={IDS.NAME_TEXTAREA}
                    >
                </InputSection>
                <Spacer spacing={50} />
                <InputSection 
                    title='Exclusions'
                    accentColour='darkseagreen'
                    instructions="Enter lines of the form 'santa: exclusion1, exclusion2, ...'"
                    onChange={() => {recalculateExclusions()}}
                    setIsClearButton={setIsClearButton} // TODO: refactor to decouple sections
                    textareaId={IDS.EXCLUSION_TEXTAREA}
                    >
                </InputSection>
                <Spacer spacing={50} />
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    );
}

export default App;
