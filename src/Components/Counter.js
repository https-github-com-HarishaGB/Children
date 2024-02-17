import React, { useState } from "react";

function Counter() {
  // Initialize the count state variable
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the count
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
