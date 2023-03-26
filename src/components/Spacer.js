import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
    margin: ${props => props.spacing}rem 0rem;
`;

const Spacer = (props) => {
	return (
        <Space spacing={props.spacing}></Space>
	);
}

export default Spacer;
