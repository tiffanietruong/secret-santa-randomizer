import React from 'react';
import styled from 'styled-components';

import { fadeIn } from './common/Animations';

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

// Uncomment when implementing exclusions
const Subtext = styled.body`
	color: white;
	text-shadow: 1px 1px 2px red;
`;

const NameCard = (props) => {
	const { accentColour, exclusions, name } = props;

	const createExclusionString = () => {
		if (!exclusions || exclusions.length === 0) return;
		console.log("exclusions yes", exclusions);
		return ' will not be assigned to ' + exclusions.join(', ');
	};

	return (
		<CardContainer accentColour={accentColour}>
			<Name>{name}</Name>
			{exclusions && exclusions.length > 0 && <Subtext>{createExclusionString()}</Subtext>}
		</CardContainer>
	);
}

export default NameCard;
