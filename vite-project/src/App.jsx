/**
 * Done: handle user input fields
 * Done: handle operations
 * Done: handle a list of histories
 * Done: render history list
 * restore the history
 */

import { useState } from 'react';

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getId = generateId();

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

    const history = {
      id: getId.next().value,
      inputs: inputState,
      operation,
      result,
      date: new Date(),
    };

    setHistories([history, ...histories]);
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
      <div>
        <h3>Inpusts</h3>
        <input
          type="number"
          name="a"
          value={inputState.a}
          onChange={handleInputFields}
        />
        <input
          type="number"
          name="b"
          value={inputState.b}
          onChange={handleInputFields}
        />
      </div>

      <div>
        <p>Operations:</p>
        <button onClick={() => handleArithmeticOps('+')}>+</button>
        <button onClick={() => handleArithmeticOps('-')}>-</button>
        <button onClick={() => handleArithmeticOps('*')}>*</button>
        <button onClick={() => handleArithmeticOps('/')}>/</button>
        <button onClick={() => handleArithmeticOps('%')}>%</button>
        <button onClick={handleClearOps}>clear</button>
      </div>

      <div>
        <p>History</p>
        {histories.length ? (
          <ul>
            {histories.map((item) => (
              <li key={item.id}>
                <p>
                  Operation: {item.inputs.a} {item.operation} {item.inputs.b},
                  Result:
                  {item.result}
                </p>
                <small>
                  {' '}
                  {item.date.toLocaleDateString()}{' '}
                  {item.date.toLocaleTimeString()}{' '}
                </small>
                <br />
                <button
                  onClick={() => handleRestoreBin(item)}
                  disabled={
                    restoredHistory !== null && restoredHistory === item.id
                  }
                >
                  Restore
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <small>There is no history</small>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
