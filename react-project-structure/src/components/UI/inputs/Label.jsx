import styled from 'styled-components';

const fontSizes = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.1rem',
};

const lineHeights = {
  sm: '1.2rem',
  md: '1.4rem',
  lg: '1.6rem',
};

const Label = styled.label`
  font-family: Arial;
  font-size: ${({ size }) => fontSizes[size] ?? '1rem'};
  color: #222;
  line-height: ${({ height }) => lineHeights[height] ?? 1.3};
  user-select: none;
`;

export default Label;
