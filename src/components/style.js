import styled from 'styled-components';
import device from '../responsive/Responsive';

export const SmallLabel = styled.h4`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '20px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  }
`;

export const MediumLabel = styled.h3`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '20px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '29px'};
  }
`;

export const BigLabel = styled.h2`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '37px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '43px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '52px'};
  } 
`;

export const Text = styled.span`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: ${({ align }) => align || 'left'};

  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '15px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '17px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '19px'};
  }
`;
