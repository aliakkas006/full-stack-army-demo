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

const Text = styled.p`
  font-family: Arial;
  font-size: ${({ size }) => fontSizes[size] ?? '1rem'};
  color: #222;
  line-height: ${({ height }) => lineHeights[height] ?? 1.3};
`;

export default Text;
