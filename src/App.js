import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Context with useReducer Example</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
