type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

export default function Counter({count, onIncrease, onDecrease, onIncreaseBy}: CounterProps) {
  return(
    <div>
      <p>{count}</p>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  )
}