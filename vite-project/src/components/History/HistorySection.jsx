import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistorySection = ({ histories, handleRestoreBin, restoredHistory }) => {
  return (
    <div>
      <p>History</p>
      {histories.length ? (
        <ul>
          {histories.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              historyItem={historyItem}
              handleRestoreBin={handleRestoreBin}
              disabled={
                restoredHistory !== null && restoredHistory === historyItem.id
              }
            />
          ))}
        </ul>
      ) : (
        <p>
          <small>There is no history</small>
        </p>
      )}
    </div>
  );
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ).isRequired,
  handleRestoreBin: PropTypes.func.isRequired,
  restoredHistory: PropTypes.number.isRequired,
};

export default HistorySection;
