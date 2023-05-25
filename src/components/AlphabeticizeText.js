import React from 'react';
import styled from 'styled-components';

import { IDS } from '../ids';
import { fadeIn, underlineOnHover } from '../components/common/Animations';
import { alphabeticizeNamesInString } from '../utils/parsingUtils';

const Text = styled.p`
    color: gray;
    animation: ${fadeIn} 0.3s ease-in-out;
    ${underlineOnHover}
`;

const onClick = (handleNameChange) => {
    const nameTextarea = document.getElementById(IDS.NAME_TEXT_AREA);
    const names = nameTextarea.value;
    const alphabeticizedNames = alphabeticizeNamesInString(names);
    nameTextarea.value=alphabeticizedNames;
    handleNameChange(alphabeticizedNames);
}

const AlphabeticizeText = (props) => {
	const { handleNameChange } = props;
	return (
		<Text onClick={() => {onClick(handleNameChange)}}>
			Alphabetize
		</Text>
	);
}

export default AlphabeticizeText;
