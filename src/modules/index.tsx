import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({
  counter
});

export default rootReducer;

/**rootReducer의 반환값을 유추 */
export type RootState = ReturnType<typeof rootReducer>;