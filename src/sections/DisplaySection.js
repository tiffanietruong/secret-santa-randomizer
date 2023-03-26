import React from 'react';
import styled from 'styled-components';

import NameCard from '../components/NameCard';
import { fadeIn } from '../components/Animations';

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`;

const GrayText = styled.p`
    color: gray;
`;

const FadeInGrayText = styled(GrayText)`
    animation: ${fadeIn} 0.3s ease-in-out;
`;

const DisplaySection = (props) => {
    const { names } = props;

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
            {/* <FadeInGrayText>Alphabetize</FadeInGrayText> */}
        </div>
    );
}

export default DisplaySection;
