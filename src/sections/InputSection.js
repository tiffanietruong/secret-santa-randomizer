import React from 'react';
import styled from 'styled-components';

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

const TextArea = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 1rem 1rem;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 10px;
	font-size: 1rem;
	resize: none;
	background-color: #f8f8f8;
`;

const InputSection = (props) => {
	const { accentColour, instructions, onChange, setIsClearButton, textareaId, title } = props;

	return (
		<div>
			<Title accentColour={accentColour}>
				{title}
			</Title>
			<Instructions>
				{instructions}
			</Instructions>
			<TextArea
				id={textareaId}
				onChange={(e) => {
					onChange(e.target.value);
					setIsClearButton(true);
				}}
			/>
		</div>
	);
}

export default InputSection;
