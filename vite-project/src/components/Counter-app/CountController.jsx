import useCounter from "../../hooks/useCounter";

const CountController = (props) => {
  const { count, handleInc, handleDec } = useCounter({...props})

  return (
    <div>
      <button
        onClick={() => {
          handleInc(count + 1);
        }}
      >
        +
      </button>
      <span> {count} </span>
      <button
        onClick={() => {
          handleDec(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default CountController;
