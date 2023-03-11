import { useSlotProps } from '@mui/base';
import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
    margin-top: ${props => props.spacing} rem;
`;

const Spacer = (props) => {
	return (
        <Space spacing={props.spacing}></Space>
	);
}

export default Spacer;
