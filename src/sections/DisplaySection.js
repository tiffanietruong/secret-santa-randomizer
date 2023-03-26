import React from 'react';
import styled from 'styled-components';

import NameCard from '../components/NameCard';
import { fadeIn, underlineOnHover } from '../components/Animations';
import { IDS } from '../ids';
import { alphabeticizeNamesInString } from '../utils/parsingUtils';

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`;

const GrayText = styled.p`
    color: gray;
`;

const AlphabeticizeText = styled.p`
    color: gray;
    animation: ${fadeIn} 0.3s ease-in-out;
    ${underlineOnHover}
`;

const onAlphabeticizeButtonClick = (handleNameChange) => {
    const nameTextArea = document.getElementById(IDS.NAME_TEXT_AREA);
    const currentNameInput = nameTextArea.value;
    const alphabeticizedNameInput = alphabeticizeNamesInString(currentNameInput);
    nameTextArea.value=alphabeticizedNameInput;
    handleNameChange(alphabeticizedNameInput);
}

const DisplaySection = (props) => {
    const { handleNameChange, names } = props;

    return (
        names.length === 0 ? 
        <Container> 
            <GrayText> 
                No names found. 
            </GrayText>
        </Container> :
        <div>
            <Container>
                {names.map((name, index) => 
                    <NameCard 
                        accentColour={index % 2 == 0 ? "darkseagreen" : "palevioletred"}
                        name={name}>
                    </NameCard>
                )}
            </Container>
            <AlphabeticizeText onClick={() => {onAlphabeticizeButtonClick(handleNameChange)}}>
                Alphabetize
            </AlphabeticizeText>
        </div>
    );
}

export default DisplaySection;
