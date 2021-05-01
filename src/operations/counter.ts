import { useState } from 'react';

export const useCount = (initialCount: number = 0) => {
  const [count, setCount] = useState<number>(initialCount);

  const incrementCount = () => {
    setCount((prevState: number) => prevState + 1);
  }

  const decrementCount = () => {
    setCount((prevState: number) => prevState - 1);
  }

  return { count, incrementCount, decrementCount };
}
