import { useEffect } from 'react';
import { useState } from 'react';

export const CounterWIthUseEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect with no dependency
  useEffect(() => {
    console.log('I will log once');
  }, []);

  // useEffect with dependency
  useEffect(() => {
    // I will log when ever count changes
    console.log('count', count);
  }, [count]);

  return (
    <div>
      <h1>Counter APP</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Count {count}
        </button>
      </div>
    </div>
  );
};
