import { useState } from 'react';  // Step 1: Import useState hook

// Step 2: Define the Counter component
function Counter() {
  // Step 3: Initialize the state (useState) for the counter
  const [count, setCount] = useState(0);  // count starts at 0

  return (
    <div>
      {/* Step 4: Display the current count */}
      <p>Current Count: {count}</p>

      {/* Buttons to modify the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>   {/* Increment count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>   {/* Decrement count */}
      <button onClick={() => setCount(0)}>Reset</button>               {/* Reset count to 0 */}
    </div>
  );
}

export default Counter;  // Export the component
