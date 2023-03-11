import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    margin-top: 3rem;
`;

const InputDisplay = (props) => {
    const { exclusions, names, setExclusions, setNames } = props;

	return (
		<div>
			<Title>Input</Title>
            {names.length === 0 ? <p> No names found </p> : <p> Not empty </p>}
		</div>
	);
}

export default InputDisplay;
