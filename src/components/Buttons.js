import styled from 'styled-components';

const Button = styled.button`
    font-family: 'Vidaloka', serif;
	color: black;
	background: white;
	border: 2px solid black;
	font-size: 1.2rem;
	margin: 1rem;
	padding: 0.5rem 1rem;
	border-radius: 5px;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
    }

    &:active {
        opacity: 0.25;
    }

`;

const OutlinedButton = styled(Button)`
	color: ${props => props.accentColour};
	background: white;
	border: 2px solid ${props => props.accentColour};

    &:hover {
        color: white;
        background: ${props => props.accentColour};
        border: 2px solid ${props => props.accentColour};
    }
`;

const SolidButton = styled(Button)`
	color: white;
    background: ${props => props.accentColour};
	border: 2px solid ${props => props.accentColour};

    &:hover {
        color: ${props => props.accentColour};
        background: white;
        border: 2px solid ${props => props.accentColour};
    }
`;

export { Button, OutlinedButton, SolidButton };