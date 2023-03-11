import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const Title = styled.h2`
	font-size: 2rem;
	text-align: left;
	color: ${props => props.accentColour};
	margin-bottom: 0rem;
`;

const Instructions = styled.p`
	font-size: 1rem;
	text-align: left;
	color: gray;
	margin-top: 0.5rem;
`;

const UserInput = (props) => {
	const { accentColour, instructions, title } = props;

	return (
		<div>
			<Title accentColour={accentColour}>
				{title}
			</Title>
			<Instructions>
				{instructions}
			</Instructions>
			<TextField
				id="outlined"
				label={title}
				defaultValue=""
				multiline
				fullWidth
			/>
		</div>
	);
}

export default UserInput;
