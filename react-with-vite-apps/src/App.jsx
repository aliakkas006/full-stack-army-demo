import styled from 'styled-components';

const BaseButton = styled.button`
  border: none;
  outline: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const PrimaryButton = styled(BaseButton)`
  background: orange;
  color: white;
  margin-left: 1rem;
`;

const App = () => {
  return (
    <div>
      <h1>Styled Components</h1>
      <BaseButton dark>Base Button</BaseButton>
      <PrimaryButton>Primary Button</PrimaryButton>
    </div>
  );
};

export default App;
