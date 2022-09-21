import useApp from './App.hook';

const App = () => {
  const { user, loading, id, max, prevHandler, nextHandler } = useApp();

  return (
    <div>
      <h1>User Deatal - {id} </h1>
      {loading && <p>loading...</p>}

      {!loading && user && (
        <div>
          name: {user.name}
          <br />
          email: {user.email}
          <br />
          phone: {user.phone}
        </div>
      )}

      <div>
        <button disabled={id === 1} onClick={prevHandler}>
          Prev
        </button>
        <button disabled={id === max} onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
