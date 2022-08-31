import shortid from 'shortid';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: '+',
      onClick: () => handleArithmeticOps('+'),
    },
    {
      id: shortid.generate(),
      text: '-',
      onClick: () => handleArithmeticOps('-'),
    },
    {
      id: shortid.generate(),
      text: '*',
      onClick: () => handleArithmeticOps('*'),
    },
    {
      id: shortid.generate(),
      text: '/',
      onClick: () => handleArithmeticOps('/'),
    },
    {
      id: shortid.generate(),
      text: '%',
      onClick: () => handleArithmeticOps('%'),
    },
    {
      id: shortid.generate(),
      text: '**',
      onClick: () => handleArithmeticOps('**'),
    },
    {
      id: shortid.generate(),
      text: 'clear',
      onClick: handleClearOps,
    },
  ];

  return (
    <div>
      <p>Operations:</p>
      <div style={{display: 'flex', gap: '0.45rem'}}>
        {operations.map((ops) => (
          <Button key={ops.id} text={ops.text} onClick={ops.onClick} />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
