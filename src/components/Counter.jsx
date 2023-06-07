import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter APP</h1>
      <div>
        <button onClick={handleCount}>Count {count}</button>
      </div>
    </div>
  );
};
