import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 3rem;
	text-align: center;
	color: black;
	margin-top: 7.5rem;
	margin-bottom: 0.5rem;
`;

const Subtitle = styled.body`
	font-size: 1.2rem;
	text-align: center;
	color: gray;
	margin-bottom: 1rem;
`;

const Header = () => {
	return (
		<div>
			<Title>Secret Santa Randomizer</Title>
			<Subtitle>Enter names, set exclusions, and see what the program registers in real-time.</Subtitle>
		</div>
	);
}

export default Header;
