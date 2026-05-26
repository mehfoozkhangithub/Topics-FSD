import { legacy_createStore } from 'redux';

import { Reducer as RegularReducer } from './Reducer';
import { Reducer as ExtraReducer } from './ExtraReducer';
import { DOUBLE } from './Actions';

const myStore = legacy_createStore(RegularReducer);

setTimeout(() => {
  myStore.replaceReducer(ExtraReducer);
  myStore.dispatch({ type: DOUBLE });
}, 3000);

const observed = myStore['@@observable']();

observed.subscribe({
  next: (event) =>
    console.log('this is from observe subscribe function value', event),
});

export { myStore };
