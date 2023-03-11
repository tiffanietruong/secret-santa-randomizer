import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
`;

const Subtitle = styled.body`
	font-size: 1.2rem;
	text-align: center;
	color: gray;
	margin-bottom: 1rem;
`;

const Results = (props) => {
    const {success, assignment} = props;

	return (
		<div>
            <Title> {success ? "Your randomization is here!" : "Sorry, we could not generate a randomization."}</Title>
		</div>
	);
}

export default Results;
