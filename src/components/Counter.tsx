import { useReducer } from 'react';
import { counterReducer, decrement, increment, reset } from '../features/counter';

const Counter = () => {
	const [state, dispatch] = useReducer(counterReducer, {count: 0})

	return (
    <section style={{ textAlign: "center" }}>
      <h1>Day since the last accident</h1>
      <p>{state.count}</p>
      <div>
        <button onClick={() => dispatch(decrement(1))}> - Decrement</button>
        <button onClick={() => dispatch(reset())}> Reset </button>
        <button onClick={() => dispatch(increment(1))}> + Increment</button>
      </div>
    </section>
  );
};

export default Counter;
