import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

export default function CounterContainer() {
  /**상태 조회 */
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch(); //디스패치 함수를 가져옴

  /**각 액션들을 디스패치하는 함수를 만들어줌 */
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return(
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseBy={onIncreaseBy}></Counter>
  )
}