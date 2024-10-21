type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

export default function Counter({count, onIncrease, onDecrease, onIncreaseBy}: CounterProps) {
  return(
    <div>
      <h1 style={{color: '#70943b'}}>{count}</h1>
      <button style={{background: '#b8e07b', color: '#fff', marginRight: '0.5rem'}} onClick={onIncrease}>+1</button>
      <button style={{background: '#9bbd68', color: '#fff', marginRight: '0.5rem'}} onClick={onDecrease}>-1</button>
      <button style={{background: '#779150', color: '#fff', marginRight: '0.5rem'}} onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  )
}