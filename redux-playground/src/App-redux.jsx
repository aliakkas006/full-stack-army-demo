import './App.css';
import Count from './components/count';
import DecrementBtn from './components/DecrementBtn';
import History from './components/History';
import IncrementBtn from './components/IncrementBtn';

function App() {
  return (
    <div className="App">
      <Count />

      <div>
        <IncrementBtn />
        <DecrementBtn />
      </div>

      <div>
        <History />
      </div>
    </div>
  );
}

export default App;
