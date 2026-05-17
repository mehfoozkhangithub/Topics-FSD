import { legacy_createStore } from 'redux';

import { OwnReducer } from '../Redux/Reducer';

export const myOwnStore = legacy_createStore(OwnReducer);
