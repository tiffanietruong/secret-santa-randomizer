import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
    height: ${props => props.spacing}px;
`;

const Spacer = (props) => {
	return (
        <Space spacing={props.spacing}></Space>
	);
}

export default Spacer;
