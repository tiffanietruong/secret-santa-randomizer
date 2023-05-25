import React from 'react';
import styled from 'styled-components';

import NameCard from '../components/NameCard';
import AlphabeticizeText from '../components/AlphabeticizeText';

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`;

const GrayText = styled.p`
    color: gray;
`;

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
            <AlphabeticizeText handleNameChange={handleNameChange}></AlphabeticizeText>
        </div>
    );
}

export default DisplaySection;
