/**
 * Done: handle user input fields
 * Done: handle operations
 * Done: handle a list of histories
 * Done: render history list
 * restore the history
 */

import { useState } from 'react';
import InputSection from './components/Inputs/InputSection';
import OperationSection from './components/Operations/OperationSectiion';
import shortid from 'shortid';
import HistorySection from './components/History/HistorySection';

/* 
custom id generator:
function* generateId() {
  let id = 1;
  while (true) yield id++;
}
const getId = generateId(); 
*/

const initialState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleArithmeticOps = (operation) => {
    if (!(inputState.a || inputState.b)) return alert('Invalid input!');

    const f = new Function(
      'operation',
      `
        return ${inputState.a} ${operation} ${inputState.b}
      `
    );

    const result = f(operation);
    setResult(result);

    const historyItem = {
      id: shortid.generate(),
      inputs: inputState,
      operation,
      result,
      date: new Date(),
    };

    setHistories([historyItem, ...histories]);
  };

  const handleClearOps = () => {
    setInputState({ ...initialState });
    setResult(0);
    setHistories([]);
  };

  const handleRestoreBin = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem.id);
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: {result} </h1>

      <InputSection inputs={inputState} handleInputFields={handleInputFields} />

      <OperationSection
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />

      <HistorySection
        histories={histories}
        handleRestoreBin={handleRestoreBin}
        restoredHistory={restoredHistory}
      />
    </div>
  );
};

export default App;
