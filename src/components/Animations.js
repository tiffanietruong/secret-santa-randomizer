import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
	opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const underlineOnHover = `
    display: inline-block;
    position: relative;
    
    &:after {
        position: absolute;
        width: 100%;
        bottom: -3px;
        left: 0px;
        height: 2px;

        content: '';
        background-color: gray; 
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export { fadeIn, underlineOnHover };
