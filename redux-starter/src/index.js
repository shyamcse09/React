import store from "./store";
import { bugAdded, bugResolved, bugRemoved } from './actions'
// Subscribe to Store to get the updated State
store.subscribe(() => {
  console.log('Store Changed!', store.getState());
})

// Add Bug
store.dispatch(bugAdded('Bug3'));
store.dispatch(bugResolved(1))
store.dispatch(bugRemoved(1))

console.log(store.getState());