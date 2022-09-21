import CountController from './components/Counter-app/CountController';

const App = () => {
  return (
    <div>
      <h1>Custom hook:</h1>

      <CountController lowerBound={5} />
      <CountController initial={3} upperBound={15} />
      <CountController />
    </div>
  );
};

export default App;
