import React from 'react';
import styled from 'styled-components';

import { fadeIn } from '../components/Animations';

const CardContainer = styled.div`
	width: 125px;
	padding: 5px;
	border-radius: 10px;
	color: white;
	background-color: ${props => props.accentColour};
	overflow-wrap: break-word;
	animation: ${fadeIn} 0.3s ease-in-out;
`;

const Name = styled.h1`
	text-shadow: 1px 1px 2px black;
`;

const NameCard = (props) => {
	const { accentColour, name } = props;

	return (
		<CardContainer accentColour={accentColour}>
			<Name>{name}</Name>
		</CardContainer>
	);
}

export default NameCard;
