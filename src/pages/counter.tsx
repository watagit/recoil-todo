import { NextPage } from 'next';
import { useCount } from '../operations/counter';

const CounterPage: NextPage = () => {
  const { count, incrementCount, decrementCount } = useCount(10);

  const incrementDouble = () => {
    incrementCount();
  }

  const decrementDouble = () => {
    decrementCount();
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementDouble}>増やす</button>
      <button onClick={decrementDouble}>減らす</button>
    </>
  );
};

export default CounterPage;
