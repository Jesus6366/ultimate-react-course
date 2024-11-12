import { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increase" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <>
      <button onClick={handleIncrement}>increment +</button>
      <h1>{state.count}</h1>
      <button onClick={handleDecrement}>decrement -</button>
    </>
  );
}

export default Counter;
