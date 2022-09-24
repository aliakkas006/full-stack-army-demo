import styled from 'styled-components';

const Button = styled.button`
  border: none;
  outline: none;
  background: '#elelel';
  color: #333;
  border-radius: 0.15rem;
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  font-family: Arial;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

export default Button;
