import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState;
  const [lock, setLock] = useState;
  const [timeCount, setTimeCount] = useState;

  useEffect(() => {
    if (count === 5) setLock(true);
    return () => {};
  }, [count]);

  return (
    <div>
      <h1> {count} </h1>
      <button disabled={lock} onClick={() => setCount(count + 1)}>
        ADD {lock && `locked - ${timeCount}s`}
      </button>
    </div>
  );
};

export default App;
