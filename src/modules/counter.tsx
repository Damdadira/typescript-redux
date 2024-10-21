/**
 * 액션 타입 선언
 * as const -> 나중에 액션 객체를 만들때 action.type의 값을 추론하는 과정에서 action.type이 string으로 추론되지 않고, 'counter/INCREASE;와 같이 실제 문자열 값으로 추론 되도록함
 */
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

/**액션 생성 함수 선언 */
export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff //액션에 부가적으로 필요한 값을 payload라는 이름으로 통일
});

/**
 * 모든 액션 객체들에 대한 타입을 준비
 * ReturnType<typeof ___>는 특정 함수의 반환값을 추론
 * 상단부에서 액션타입을 선언할때 as const를 하지 않으면 이 부분이 제대로 작동하지 않음
 */
type CounterAction = 
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

/**이 리덕스 모듈에서 관리 할 상태의 타입을 선언함 */
type CounterState = {
  count: number;
};

/**초기상태를 선언 */
const initialState: CounterState = {
  count: 0
};

/**
 * 리듀서
 * 액션에서는 CounterACtion을 타입으로 설정
 */
export default function counter(state: CounterState = initialState, action: CounterAction): CounterState {
  switch(action.type){
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}