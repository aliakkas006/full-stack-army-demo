import PropTypes from 'prop-types';
import Button from '../UI/Button';

const HistoryItem = ({ historyItem, handleRestoreBin, disabled }) => {
  return (
    <li>
      <p>
        Operation: {historyItem.inputs.a} {historyItem.operation}{' '}
        {historyItem.inputs.b}, Result:
        {historyItem.result}
      </p>
      <small>
        {' '}
        {historyItem.date.toLocaleDateString()}{' '}
        {historyItem.date.toLocaleTimeString()}{' '}
      </small>
      <br />
      <Button
        text="Restore"
        onClick={() => handleRestoreBin(historyItem)}
        disabled={disabled}
      />
    </li>
  );
};

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  handleRestoreBin: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
