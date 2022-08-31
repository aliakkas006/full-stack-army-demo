import PropTypes from 'prop-types';
import NumberField from '../UI/NumberField';

const InputSection = ({ inputs, handleInputFields }) => {
  const style = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#efefef',
    borderRadius: '0.10rem',
  };

  return (
    <div style={style}>
      <h3>Inputs:</h3>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'space-between',
        }}
      >
        <NumberField value={inputs.a} onChange={handleInputFields} name="a" />
        <NumberField value={inputs.b} onChange={handleInputFields} name="b" />
      </div>
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputFields: PropTypes.func.isRequired,
};

export default InputSection;
